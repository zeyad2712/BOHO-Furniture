import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Cart Context
const CartContext = createContext();

// Helper to load cart from localStorage
const loadCartFromStorage = () => {
    try {
        const savedCart = localStorage.getItem('boho-cart');
        if (savedCart) {
            const cartData = JSON.parse(savedCart);
            if (Array.isArray(cartData)) {
                return cartData;
            }
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
    return [];
};

// Cart Reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }]
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Math.max(0, action.payload.quantity) }
                        : item
                ).filter(item => item.quantity > 0)
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };

        case 'LOAD_CART':
            return {
                ...state,
                items: action.payload || []
            };

        default:
            return state;
    }
};

// Initial state, loaded from localStorage if available
const initialState = {
    items: loadCartFromStorage()
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('boho-cart', JSON.stringify(state.items));
    }, [state.items]);

    // Cart actions
    const addToCart = (product, quantity = 1) => {
        for (let i = 0; i < quantity; i++) {
            dispatch({ type: 'ADD_TO_CART', payload: product });
        }
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    // Calculate cart totals
    const getCartTotal = () => {
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemsCount = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

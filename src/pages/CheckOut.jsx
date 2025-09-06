import React, { useState, useEffect } from "react";
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

function CheckOut() {
    const { items, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvc: "",
    });
    const [submitted, setSubmitted] = useState(false);

    // Redirect if cart is empty
    useEffect(() => {
        if (items.length === 0 && !submitted) {
            navigate('/products');
        }
    }, [items, navigate, submitted]);

    // Calculate subtotal using cart context
    const subtotal = getCartTotal();
    const shipping = subtotal > 500 ? 0 : 15.99; // Free shipping over $500
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Clear the cart after successful order
        clearCart();
        // In a real app, submit order here
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Section - Checkout Form */}
                    <div className="space-y-6">

                        {/* Contact Information */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                    1
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="01XXXXXXXXX"
                                />
                            </div>
                        </div>

                        {/* Shipping Information */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                    2
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900">Shipping Information</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="First name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Last name"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Street address"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="City"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="State"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={form.zip}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="ZIP"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Payment Information */}
                        {/* Payment Method Selection */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                        3
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-900">Payment Information</h2>
                                </div>
                                <div className="flex items-center text-green-600">
                                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium">Secure Payment</span>
                                </div>
                            </div>

                            {/* Payment Method Radio Buttons */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Choose Payment Method</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="creditCard"
                                            checked={form.paymentMethod === "creditCard"}
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-800">Credit Card</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="paypal"
                                            checked={form.paymentMethod === "paypal"}
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-800">PayPal</span>
                                    </label>
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cod"
                                            checked={form.paymentMethod === "cod"}
                                            onChange={handleChange}
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-800">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>

                            {/* Credit Card Section - Only show if selected */}
                            {form.paymentMethod === "creditCard" && (
                                <>
                                    {/* Credit Card Preview */}
                                    <div className="mb-6 flex justify-center">
                                        <div className="relative w-80 h-48 rounded-xl shadow-lg bg-gradient-to-br from-blue-500 to-blue-800 text-white p-6 flex flex-col justify-between">
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-lg tracking-widest">BOHO</span>
                                                <img src="/images/creditcard-chip.png" alt="chip" className="w-10 h-7" style={{ filter: 'brightness(1.2)' }} />
                                            </div>
                                            <div className="mt-6 mb-2">
                                                <div className="text-xl font-mono tracking-widest">
                                                    {form.cardNumber
                                                        ? form.cardNumber.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().padEnd(19, '•')
                                                        : '•••• •••• •••• ••••'}
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <div className="text-xs uppercase opacity-70">Card Holder</div>
                                                    <div className="font-semibold text-sm">{form.name || 'FULL NAME'}</div>
                                                </div>
                                                <div>
                                                    <div className="text-xs uppercase opacity-70">Expires</div>
                                                    <div className="font-semibold text-sm">{form.expiry || 'MM/YY'}</div>
                                                </div>
                                                <div>
                                                    <img src="/images/creditcard-visa.png" alt="visa" className="w-10 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={form.cardNumber}
                                            onChange={handleChange}
                                            required={form.paymentMethod === "creditCard"}
                                            maxLength={19}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="1234 5678 9012 3456"
                                            autoComplete="cc-number"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                name="expiry"
                                                value={form.expiry}
                                                onChange={handleChange}
                                                required={form.paymentMethod === "creditCard"}
                                                maxLength={5}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="MM/YY"
                                                autoComplete="cc-exp"
                                                pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">CVC</label>
                                            <input
                                                type="text"
                                                name="cvc"
                                                value={form.cvc}
                                                onChange={handleChange}
                                                required={form.paymentMethod === "creditCard"}
                                                maxLength={4}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="123"
                                                autoComplete="cc-csc"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* PayPal Section - Only show if selected */}
                            {form.paymentMethod === "paypal" && (
                                <div className="mb-4">
                                    <div className="flex items-center gap-2">
                                        <img src="/images/paypal-logo.png" alt="PayPal" className="h-6" />
                                        <span className="text-gray-700 font-medium">You will be redirected to PayPal to complete your purchase.</span>
                                    </div>
                                </div>
                            )}

                            {/* Cash on Delivery Section - Only show if selected */}
                            {form.paymentMethod === "cod" && (
                                <div className="mb-4">
                                    <div className="flex items-center gap-2">
                                        <i className="fa-solid fa-money-bill-wave text-green-600"></i>
                                        <span className="text-gray-700 font-medium">You will pay with cash upon delivery.</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Section - Order Summary */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-fit"
                        style={{
                            position: 'sticky',
                            top: '10%'
                        }}>
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

                        {/* Cart Items */}
                        <div className="space-y-4 mb-6">
                            {items.length === 0 ? (
                                <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
                            ) : (
                                items.map((item, idx) => (
                                    <div key={item.id || idx} className="flex items-center space-x-4">
                                        <img
                                            src={item.image || "/images/products/placeholder.jpg"}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
                                            <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-900">
                                                ${((item.price * (item.quantity || 1)).toFixed(2))}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Cost Breakdown */}
                        <div className="border-t border-gray-200 pt-4 space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                                    </svg>
                                    <span>Shipping</span>
                                </div>
                                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-green-600 pt-2">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Complete Purchase Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={items.length === 0}
                            className="w-full mt-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span>Complete Purchase</span>
                        </button>

                        {/* Security Indicators */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>SSL Secure</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>256-bit Encryption</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-4 h-4 mr-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600">Protected by industry-standard security</span>
                            </div>
                            <div className="text-center">
                                <span className="text-sm text-gray-600">30-day money-back guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                {submitted && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your order!</h2>
                            <p className="text-gray-600 mb-6">
                                Your order has been placed successfully. A confirmation email will be sent to <span className="font-semibold">{form.email}</span>.
                            </p>
                            <Link
                                to="/"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckOut;
# BOHO Furniture

A modern e-commerce website for boho furniture built with React and Vite.

## Features

### ProductCard Component

The ProductCard component is a beautifully designed, modern product card with the following features:

- **Responsive Design**: Adapts to different screen sizes with a clean grid layout
- **Hover Effects**: Smooth animations and transitions on hover
- **Rating System**: Visual star rating with half-star support
- **Price Display**: Shows current price and original price with discount calculation
- **Wishlist Functionality**: Heart icon to add/remove items from wishlist
- **Quick View**: Overlay with quick view button on hover
- **Stock Status**: Visual indicators for in-stock/out-of-stock items
- **Discount Badges**: Automatic calculation and display of discount percentages
- **Add to Cart**: Prominent call-to-action button with disabled state for out-of-stock items
- **Image Handling**: Fallback images for broken product images
- **Accessibility**: Proper ARIA labels and keyboard navigation support

#### Usage

```jsx
import ProductCard from './components/ProductCard';

const product = {
  id: 1,
  name: "Boho Macrame Hanging Chair",
  category: "Chairs",
  price: 299.99,
  originalPrice: 399.99,
  image: "/path/to/image.jpg",
  rating: 4.8,
  reviews: 127,
  inStock: true
};

<ProductCard product={product} />
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technologies Used

- React 19
- Vite
- Tailwind CSS (via CDN)
- React Icons
- Bootstrap (via CDN)

## Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Main product card component
│   ├── BestSelling.jsx      # Showcase component using ProductCard
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   └── ...
├── data/
│   └── ProductsData.js      # Product data and utilities
└── ...
```

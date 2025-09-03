
# BOHO Furniture

BOHO Furniture is a modern, feature-rich e-commerce website for boho furniture, built with React and Vite. It offers a beautiful, responsive UI, advanced product browsing, cart management, and more.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Main Components](#main-components)
- [Context & State Management](#context--state-management)
- [Pages](#pages)
- [Utilities](#utilities)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

BOHO Furniture is a full-stack e-commerce platform focused on unique, handcrafted bohemian furniture. It features:

- Modern, responsive design
- Product catalog with filtering, sorting, and search
- Product details with reviews, shipping, and returns info
- Cart and wishlist management
- Dark mode toggle
- Google Sheets integration for contact submissions
- Accessibility and smooth animations

---


## Live Demo

> https://boho-furniture.vercel.app/

---

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

### Other Features

- **Home Page**: Hero section, services, categories, new arrivals, best selling, reviews, about us, contact
- **Products Page**: Filter by category, price, rating, search, sort, animated grid
- **Product Details**: Multiple images, color selection, quantity, add to cart, wishlist, tabs for description, reviews, shipping, returns
- **Cart**: Add, remove, update quantity, clear cart, persistent via localStorage
- **Dark Mode**: Toggle between light and dark themes
- **Contact Form**: Submissions saved locally and optionally sent to Google Sheets
- **Footer**: Social links, quick navigation, legal info
- **Accessibility**: ARIA labels, keyboard navigation, color contrast
- **Animations**: Fade, slide, scale, number count, staggered grid

---

## Getting Started


1. **Clone the repository**
  ```sh
  git clone https://github.com/zeyad2712/BOHO-Furniture.git
  cd BOHO-Furniture
  ```
2. **Install dependencies**
  ```sh
  npm install
  ```
3. **Start the development server**
  ```sh
  npm run dev
  ```
4. **Open** [http://localhost:5173](http://localhost:5173) in your browser

---

## Technologies Used

- React 19
- Vite
- React Router DOM
- Tailwind CSS (via CDN)
- React Icons
- Bootstrap (via CDN)

---

## Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Main product card component
│   ├── BestSelling.jsx      # Showcase component using ProductCard
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── DarkModeToggoler.jsx
│   ├── Footer.jsx
│   ├── Reviews.jsx
│   ├── ContactUs.jsx
│   ├── AboutUs.jsx
│   ├── NewArrivals.jsx
│   ├── ServicesSection.jsx
│   ├── CategorisSection.jsx
│   ├── ScrollToTop.jsx
│   └── ...
├── pages/
│   ├── Home.jsx             # Home page component
│   ├── Products.jsx         # Products page component
│   ├── ProductDetails.jsx   # Product details page
│   ├── About.jsx            # About page
│   ├── Terms.jsx            # Terms and conditions
│   ├── Shipping.jsx         # Shipping info
│   ├── Refund.jsx           # Refund policy
│   ├── Privacy.jsx          # Privacy policy
│   └── ...
├── context/
│   └── CartContext.jsx      # Cart state management
├── data/
│   ├── ProductsData.js      # Product data and utilities
│   └── contactSubmissions.json # Contact form submissions
├── utils/
│   ├── contactStorage.js    # Local contact form storage
│   └── googleSheetsIntegration.js # Google Sheets API integration
├── assets/
│   └── images/              # Product and hero images
└── ...
```

---

## Main Components

- **Navbar**: Top navigation bar with links, dropdowns, and dark mode toggle
- **Hero**: Eye-catching intro section on the home page
- **ServicesSection**: Highlights store services
- **CategorisSection**: Displays product categories
- **NewArrivals**: Shows latest products
- **BestSelling**: Highlights popular products
- **ProductCard**: Individual product display with actions
- **Reviews**: Customer testimonials
- **AboutUs**: Brand story and values
- **ContactUs**: Contact form, Google Sheets integration
- **Footer**: Social links, navigation, legal info
- **ScrollToTop**: Button to scroll to top
- **DarkModeToggoler**: Switch between light/dark themes

---

## Context & State Management

- **CartContext**: Provides cart state and actions (`addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`, `getCartTotal`, `getCartItemsCount`). Cart is persisted in localStorage.
- **useCart**: Custom hook to access cart context

---

## Data

- **ProductsData.js**: Contains product objects with fields like `id`, `name`, `category`, `price`, `originalPrice`, `image`, `rating`, `reviews`, `inStock`, `features`, `dimensions`, `colors`, `description`.
- **contactSubmissions.json**: Stores contact form submissions locally

---

## Pages

- **Home.jsx**: Main landing page, imports all showcase components
- **Products.jsx**: Product catalog with filters, sorting, search, animated grid
- **ProductDetails.jsx**: Detailed product info, tabs for description, reviews, shipping, returns, add to cart, wishlist
- **About.jsx**: Brand story, values, team, statistics, CTA
- **Terms.jsx**: Terms and conditions
- **Shipping.jsx**: Shipping information
- **Refund.jsx**: Refund policy
- **Privacy.jsx**: Privacy policy

---

## Utilities

- **contactStorage.js**: Handles saving contact form submissions locally
- **googleSheetsIntegration.js**: Sends contact form data to Google Sheets via Apps Script

---

## Configuration

- **vite.config.js**: Vite configuration
- **eslint.config.js**: ESLint rules

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.


# 🪑 BOHO Furniture

A modern, feature-rich e-commerce website for handcrafted bohemian furniture, built with React and Vite. Experience beautiful, responsive design with advanced product browsing, cart management, and seamless user interactions.

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Components Overview](#-components-overview)
- [Data Management](#-data-management)
- [Google Sheets Integration](#-google-sheets-integration)
- [Development Scripts](#-development-scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Project Overview

BOHO Furniture is a comprehensive e-commerce platform specializing in unique, handcrafted bohemian furniture. The application showcases a modern, responsive design with advanced features including:

- **E-commerce Functionality**: Complete product catalog with filtering, sorting, and search
- **Shopping Cart**: Persistent cart management with localStorage
- **Product Management**: Detailed product pages with multiple views and specifications
- **Contact Integration**: Form submissions with Google Sheets integration
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach with smooth animations
- **Accessibility**: ARIA labels, keyboard navigation, and color contrast compliance

---

## 🌐 Live Demo

> **Live Demo**: [https://boho-furniture.vercel.app/](https://boho-furniture.vercel.app/)

Experience the full functionality of the BOHO Furniture website with all features enabled.

---

## ✨ Key Features

### 🛍️ E-commerce Core Features

- **Product Catalog**: Browse 12+ handcrafted furniture pieces across multiple categories
- **Advanced Filtering**: Filter by category, price range, rating, and availability
- **Search Functionality**: Real-time product search with instant results
- **Product Details**: Comprehensive product pages with multiple images, specifications, and reviews
- **Shopping Cart**: Add, remove, update quantities, and persistent cart storage
- **Wishlist**: Save favorite products for later purchase

### 🎨 User Interface & Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Toggle**: Seamless switching between light and dark themes
- **Smooth Animations**: Fade, slide, scale, and count-up animations
- **Interactive Elements**: Hover effects, loading states, and micro-interactions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 📱 Pages & Navigation

- **Home Page**: Hero section, services, categories, new arrivals, best sellers, reviews
- **Products Page**: Filterable product grid with sorting options
- **Product Details**: Detailed product information with tabs for description, reviews, shipping
- **About Page**: Brand story, values, and company information
- **Legal Pages**: Terms, shipping, refund, and privacy policies

### 🔧 Technical Features

- **State Management**: React Context for cart and application state
- **Data Persistence**: localStorage for cart and contact form submissions
- **Google Sheets Integration**: Automatic contact form data export
- **Performance Optimized**: Lazy loading, image optimization, and efficient rendering
- **SEO Ready**: Meta tags, semantic HTML, and structured data

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zeyad2712/BOHO-Furniture.git
   cd BOHO-Furniture
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Technologies Used

### Core Technologies
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Fast build tool and development server
- **React Router DOM 7.8.2** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Bootstrap** - Component library (via CDN)
- **Custom CSS** - Inline styles and animations

### Additional Libraries
- **@emailjs/browser 4.4.1** - Email service integration
- **@splidejs/react-splide 0.7.12** - Carousel/slider component
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugin React** - React support for Vite

---

## 📁 Project Structure

```
BOHO-Furniture/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx           # About us section
│   │   ├── BestSelling.jsx       # Best selling products
│   │   ├── CategorisSection.jsx  # Product categories
│   │   ├── ContactUs.jsx         # Contact form with Google Sheets
│   │   ├── DarkModeToggoler.jsx  # Dark mode toggle
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Hero.jsx              # Hero section with animations
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── NewArrivals.jsx       # New arrivals section
│   │   ├── ProductCard.jsx       # Individual product card
│   │   ├── Reviews.jsx           # Customer reviews
│   │   ├── ScrollToTop.jsx       # Scroll to top button
│   │   └── ServicesSection.jsx   # Services showcase
│   ├── context/
│   │   └── CartContext.jsx       # Cart state management
│   ├── data/
│   │   ├── ProductsData.js       # Product data and utilities
│   │   └── contactSubmissions.json # Contact form data
│   ├── pages/
│   │   ├── About.jsx             # About page
│   │   ├── Home.jsx              # Home page
│   │   ├── Privacy.jsx           # Privacy policy
│   │   ├── ProductDetails.jsx    # Product details page
│   │   ├── Products.jsx          # Products catalog
│   │   ├── Refund.jsx            # Refund policy
│   │   ├── Shipping.jsx          # Shipping information
│   │   └── Terms.jsx             # Terms and conditions
│   ├── utils/
│   │   ├── contactStorage.js     # Local storage utilities
│   │   └── googleSheetsIntegration.js # Google Sheets API
│   ├── assets/
│   │   └── images/               # Static images
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # Global styles
│   ├── index.css                 # Base styles
│   └── main.jsx                  # Application entry point
├── google-apps-script.js         # Google Apps Script for Sheets
├── GOOGLE_SHEETS_SETUP.md        # Google Sheets setup guide
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
└── README.md                    # Project documentation
```

---

## 🧩 Components Overview

### Core Components

#### 🛒 ProductCard
Modern, responsive product card with:
- Hover effects and animations
- Star rating system with half-star support
- Price display with discount calculation
- Wishlist functionality
- Stock status indicators
- Add to cart functionality
- Image fallback handling

#### 🏠 Hero Section
Eye-catching landing section featuring:
- Animated statistics counters
- Gradient text effects
- Floating decorative elements
- Responsive image gallery
- Call-to-action buttons
- Scroll indicators

#### 🛍️ Cart Management
Complete shopping cart system:
- Add/remove products
- Quantity updates
- Persistent storage
- Total calculations
- Cart item count display

### Page Components

#### 🏡 Home Page
Comprehensive landing page with:
- Hero section with animations
- Services showcase
- Product categories
- New arrivals carousel
- Best selling products
- Customer reviews
- About us section
- Contact form

#### 📦 Products Page
Advanced product catalog featuring:
- Filterable product grid
- Category filtering
- Price range filtering
- Rating filtering
- Search functionality
- Sorting options
- Animated grid layout

#### 🔍 Product Details
Detailed product information with:
- Multiple product images
- Color and size selection
- Quantity controls
- Add to cart/wishlist
- Product specifications
- Customer reviews
- Shipping information
- Related products

---

## 💾 Data Management

### Product Data Structure

Products are defined with comprehensive information:

```javascript
{
  id: 1,
  name: "Boho Macrame Hanging Chair",
  category: "Chairs",
  price: 299.99,
  originalPrice: 399.99,
  image: "/images/products/macrame-chair.jpg",
  imageView1: "/images/products/macrame-chair-1.jpg",
  imageView2: "/images/products/macrame-chair-2.jpg",
  imageView3: "/images/products/macrame-chair-3.jpg",
  description: "Handcrafted macrame hanging chair...",
  rating: 4.8,
  reviews: 127,
  inStock: true,
  features: ["Handcrafted", "Natural materials", "Weight capacity: 300 lbs"],
  colors: ["Natural", "Beige", "White"],
  dimensions: "32\" W x 32\" D x 40\" H"
}
```

### Data Utilities

- **Product Filtering**: Filter by category, price, rating, availability
- **Search Functionality**: Real-time product search
- **Featured Products**: Highlight high-rated items
- **On-Sale Products**: Identify discounted items

---

## 📊 Google Sheets Integration

### Setup Process

1. **Create Google Apps Script** using the provided `google-apps-script.js`
2. **Deploy as Web App** with public access
3. **Update Configuration** in `googleSheetsIntegration.js`
4. **Test Integration** using the contact form

### Features

- **Automatic Export**: Contact form submissions sent to Google Sheets
- **Manual Export**: Export all existing submissions
- **Data Backup**: Local storage as fallback
- **Error Handling**: Graceful failure with user feedback

### Data Structure

Contact submissions include:
- Unique ID
- Timestamp
- Name and contact information
- Message content
- Export status

---

## 🚀 Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Available at:
# http://localhost:5173 (development)
# http://localhost:4173 (preview)
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Unsplash** for beautiful product images
- **All Contributors** who help improve this project

---

<div align="center">

**Made by Zeyad Waleed**

[⭐ Star this repo](https://github.com/zeyad2712/BOHO-Furniture) | [🐛 Report Bug](https://github.com/zeyad2712/BOHO-Furniture/issues) | [💡 Request Feature](https://github.com/zeyad2712/BOHO-Furniture/issues)

</div>

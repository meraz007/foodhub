# FoodHub - Premium E-Commerce Platform

A modern, fully responsive e-commerce website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This platform is designed for a Bangladesh-based business selling imported food products and international brands.

## 🚀 Features

### Core Functionality
- ✅ **Next.js 14 App Router** - Latest Next.js features with server and client components
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **Tailwind CSS** - Modern, responsive styling with custom design system
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **Zustand** - Lightweight state management for cart functionality
- ✅ **Next/Image** - Optimized image loading everywhere

### Pages & Features
- 🏠 **Home Page** - Hero banner, featured categories, top products
- 📦 **Product Pages** - Detailed product views with image gallery
- 🏷️ **Category Pages** - Browse products by category
- 🛒 **Shopping Cart** - Full cart management with persistent storage
- 💳 **Checkout** - Complete checkout flow with form validation
- 📄 **Static Pages** - About Us, Contact, Privacy Policy
- 🔍 **Search** - Product search functionality
- 📱 **Mobile Navigation** - Responsive drawer navigation

### Design & UX
- 🎨 **Modern UI** - Clean, minimal design with warm color palette
- 🌊 **Smooth Animations** - Scroll animations, hover effects, transitions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **SEO Optimized** - Proper metadata, OpenGraph tags, and semantic HTML
- ⚡ **Fast Performance** - Optimized images and code splitting

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
e-commerce/
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   │   ├── products/       # Product API endpoints
│   │   └── categories/     # Category API endpoints
│   ├── category/           # Category pages
│   ├── product/            # Product detail pages
│   ├── cart/               # Shopping cart page
│   ├── checkout/           # Checkout page
│   ├── order-success/      # Order confirmation
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy policy
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Container.tsx
│   │   ├── SearchBar.tsx
│   │   └── LoadingSpinner.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── product/            # Product components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── CategoryCard.tsx
│   ├── cart/               # Cart components
│   │   └── CartItem.tsx
│   └── home/               # Home page components
│       ├── Hero.tsx
│       ├── FeaturedCategories.tsx
│       ├── FeaturedProducts.tsx
│       └── WhyChooseUs.tsx
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   ├── utils.ts            # Utility functions
│   └── store/
│       └── cart-store.ts   # Zustand cart store
├── data/
│   ├── products.ts         # Mock product data
│   └── categories.ts       # Category data
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary:** Warm orange tones (#F59E0B)
- **Accent:** Red-orange (#FF5722)
- **Success:** Green (#16A34A)
- **Backgrounds:** White, Light Gray, Soft gradients

### Typography
- **Headings:** Poppins (Bold, Display)
- **Body:** Inter (Clean, Readable)

### Components
- Rounded corners (rounded-xl, rounded-2xl)
- Subtle shadows with hover effects
- Smooth transitions (300ms)
- Consistent spacing (px-4, py-3)

## 📦 Mock Data

The project includes 20 sample products across 8 categories:
- 🍫 Chocolate
- 🥛 Milk
- ☕ Coffee
- 🍿 Snacks
- 🍜 Ramen
- 🍪 Biscuits
- 🍬 Candy
- 🥤 Drinks

## 🛒 Cart Features

- Add/remove items
- Update quantities
- Persistent storage (localStorage)
- Real-time total calculation
- Free shipping threshold (৳2000)

## 🔧 Customization

### Adding Products
Edit `data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-slug',
  description: 'Product description',
  price: 1000,
  category: 'chocolate',
  image: 'https://...',
  inStock: true,
  featured: true,
}
```

### Modifying Colors
Edit `tailwind.config.ts` to customize the color scheme.

### Adding Categories
Edit `data/categories.ts` to add new categories.

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎯 SEO Features

- Dynamic metadata per page
- OpenGraph tags for social sharing
- Semantic HTML structure
- Mobile-friendly design
- Fast loading times

## 📝 License

This project is created for educational and commercial purposes.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Contact

For questions or support, visit the Contact page or reach out at info@foodhub.com

---

**Built with ❤️ for food enthusiasts in Bangladesh**



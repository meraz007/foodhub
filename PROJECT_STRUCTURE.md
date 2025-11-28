# FoodHub - Project Structure

```
e-commerce/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📁 about/                   # About page
│   │   └── page.tsx
│   │
│   ├── 📁 api/                     # API Routes
│   │   ├── 📁 categories/
│   │   │   └── route.ts           # Get all categories
│   │   └── 📁 products/
│   │       ├── route.ts           # Get products (with filters)
│   │       └── 📁 [slug]/
│   │           └── route.ts       # Get single product
│   │
│   ├── 📁 cart/                    # Shopping cart page
│   │   └── page.tsx
│   │
│   ├── 📁 category/                # Category pages
│   │   └── 📁 [slug]/
│   │       └── page.tsx           # Dynamic category page
│   │
│   ├── 📁 checkout/                # Checkout page
│   │   └── page.tsx
│   │
│   ├── 📁 contact/                 # Contact page
│   │   └── page.tsx
│   │
│   ├── 📁 order-success/           # Order confirmation
│   │   └── page.tsx
│   │
│   ├── 📁 privacy/                 # Privacy policy
│   │   └── page.tsx
│   │
│   ├── 📁 product/                 # Product pages
│   │   └── 📁 [slug]/
│   │       └── page.tsx           # Dynamic product page
│   │
│   ├── 📁 search/                  # Search results
│   │   └── page.tsx
│   │
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   ├── loading.tsx                # Loading UI
│   ├── not-found.tsx              # 404 page
│   ├── page.tsx                   # Home page
│   └── sitemap.ts                 # SEO sitemap
│
├── 📁 components/                   # React Components
│   │
│   ├── 📁 cart/                    # Cart components
│   │   └── CartItem.tsx           # Individual cart item
│   │
│   ├── 📁 home/                    # Home page components
│   │   ├── FeaturedCategories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Hero.tsx               # Hero banner
│   │   └── WhyChooseUs.tsx        # Benefits section
│   │
│   ├── 📁 layout/                  # Layout components
│   │   ├── Footer.tsx             # Site footer
│   │   ├── Header.tsx             # Site header
│   │   └── MobileNav.tsx          # Mobile navigation
│   │
│   ├── 📁 product/                 # Product components
│   │   ├── CategoryCard.tsx       # Category display card
│   │   ├── ProductCard.tsx        # Product display card
│   │   └── ProductGrid.tsx        # Product grid layout
│   │
│   └── 📁 ui/                      # Reusable UI components
│       ├── Badge.tsx              # Status badges
│       ├── Button.tsx             # Button component
│       ├── Container.tsx          # Layout container
│       ├── Input.tsx              # Form input
│       ├── LoadingSpinner.tsx     # Loading indicator
│       └── SearchBar.tsx          # Search input
│
├── 📁 data/                         # Static data
│   ├── categories.ts              # Category data (8 items)
│   └── products.ts                # Product data (20 items)
│
├── 📁 hooks/                        # Custom React hooks
│   └── useCart.ts                 # Cart operations hook
│
├── 📁 lib/                          # Utilities & helpers
│   ├── 📁 store/
│   │   └── cart-store.ts         # Zustand cart store
│   ├── types.ts                   # TypeScript interfaces
│   └── utils.ts                   # Utility functions
│
├── 📁 public/                       # Static files
│   └── robots.txt                 # SEO robots file
│
├── 📄 .eslintrc.json               # ESLint config
├── 📄 .gitignore                   # Git ignore rules
├── 📄 FEATURES.md                  # Complete feature list
├── 📄 next.config.js               # Next.js config
├── 📄 package.json                 # Dependencies
├── 📄 postcss.config.js            # PostCSS config
├── 📄 PROJECT_STRUCTURE.md         # This file
├── 📄 README.md                    # Main documentation
├── 📄 SETUP.md                     # Setup instructions
├── 📄 tailwind.config.ts           # Tailwind config
└── 📄 tsconfig.json                # TypeScript config
```

## 📊 Statistics

- **Total Pages:** 11 (Home, 8 dynamic category pages, product pages, cart, checkout, etc.)
- **Components:** 20+ reusable components
- **API Routes:** 3 endpoints
- **Products:** 20 sample items
- **Categories:** 8 categories
- **Lines of Code:** ~3000+ (excluding node_modules)

## 🎯 Key Directories

### `/app`
The heart of the Next.js application using App Router. Contains all pages, layouts, and API routes.

### `/components`
Organized by feature/purpose:
- `ui/` - Generic reusable components
- `layout/` - Site-wide layout components
- `product/` - Product-specific components
- `cart/` - Shopping cart components
- `home/` - Home page sections

### `/data`
Mock data for products and categories. In production, this would come from a database.

### `/lib`
Business logic, utilities, and state management:
- `store/` - Zustand stores
- `types.ts` - TypeScript definitions
- `utils.ts` - Helper functions

### `/hooks`
Custom React hooks for common operations.

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration |
| `tailwind.config.ts` | Tailwind CSS custom theme |
| `tsconfig.json` | TypeScript compiler options |
| `postcss.config.js` | PostCSS plugins |
| `.eslintrc.json` | Code linting rules |

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open browser: `http://localhost:3000`

## 📝 Notes

- All components are fully typed with TypeScript
- Responsive design implemented throughout
- SEO-optimized with proper metadata
- Animations powered by Framer Motion
- State management with Zustand
- Modern, clean code structure







# LUXE - Premium E-commerce Website

A luxury e-commerce website built with Next.js, Tailwind CSS, and Framer Motion, featuring a premium dark theme with gold accents.

## 🌟 Features

- **Luxury Design**: Dark gradient background with gold accents
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth Framer Motion animations and transitions
- **3D Effects**: Parallax tilt effects on hero section
- **Shopping Cart**: Full cart functionality with Zustand state management
- **Product Management**: Search, filter, and sort products
- **Glass Morphism**: Modern glass card designs
- **Performance**: Optimized with Next.js Image component

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: Zustand
- **3D Effects**: React Parallax Tilt
- **Icons**: Lucide React
- **Images**: Next/Image optimization

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── products/
│   │   └── page.tsx         # Products listing
│   └── cart/
│       └── page.tsx         # Shopping cart
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── ProductCard.tsx      # Product card component
│   └── Footer.tsx           # Footer component
├── store/
│   └── cartStore.ts         # Zustand cart store
├── data/
│   └── products.json        # Product data
└── tailwind.config.js       # Tailwind configuration
```

## 🎨 Design Features

- **Color Scheme**: Dark luxury theme (#0b0f18) with gold gradients
- **Typography**: Premium spacing and modern fonts
- **Animations**: Smooth hover effects and page transitions
- **Glass Cards**: Backdrop blur with subtle borders
- **3D Elements**: Parallax tilt on hero product image

## 🛒 E-commerce Features

- Product catalog with high-quality images
- Add to cart functionality
- Quantity management
- Cart persistence with localStorage
- Responsive product grid
- Search and filter products
- Order summary with tax calculation

## 📱 Responsive Design

- **Mobile**: Single column layout
- **Tablet**: Two column product grid
- **Desktop**: Three to four column grid
- **Navigation**: Collapsible mobile menu

## 🔧 Customization

1. **Products**: Edit `data/products.json` to add/modify products
2. **Colors**: Update `tailwind.config.js` for color scheme changes
3. **Animations**: Modify Framer Motion variants in components
4. **Layout**: Adjust grid layouts in Tailwind classes

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Performance Optimizations

- Next.js Image optimization
- Lazy loading of components
- Efficient state management with Zustand
- Minimal bundle size with tree shaking
- Optimized animations with Framer Motion

---

**LUXE** - Experience luxury redefined with premium e-commerce.
# Averra - Premium Groundnut Oil Landing Page

A modern, premium, and fully responsive landing page for Averra, a traditional ghani groundnut oil brand. Built with React, TypeScript, and Tailwind CSS with beautiful animations.

## Features

- **Modern Design**: Clean, minimal, and premium aesthetic
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Component-Based Architecture**: Well-organized, reusable components
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Built with Vite for lightning-fast development and production builds

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful icon library

## Color Palette

- **Primary**: Warm Yellow `#F5C542`
- **Secondary**: Cream/Off-white `#FFF8E7`
- **Accent**: Dark Brown `#5A3E2B`

## Project Structure

```
src/
├── sections/          # Page sections
│   ├── Navbar.tsx    # Sticky navigation
│   ├── Hero.tsx      # Hero section with animations
│   ├── Features.tsx  # 4 feature cards
│   ├── Products.tsx  # Product showcase
│   ├── Benefits.tsx  # Health benefits section
│   ├── About.tsx     # Brand story
│   ├── Testimonials.tsx # Customer reviews carousel
│   ├── CTABanner.tsx # Call-to-action banner
│   └── Footer.tsx    # Footer with links
├── components/       # Reusable UI components (shadcn/ui)
├── lib/             # Utility functions
├── App.tsx          # Main app component
└── main.tsx         # App entry point
```

## Sections Overview

### 1. Navbar
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- CTA button for quick access

### 2. Hero Section
- Eye-catching headline with brand messaging
- Animated product display
- Clear value propositions
- Call-to-action buttons

### 3. Features Section
- 4 feature cards highlighting key benefits:
  - 100% Natural
  - Cold Pressed
  - Rich in Nutrients
  - No Chemicals
- Hover animations for engagement

### 4. Products Section
- 3 product variants with pricing
- Interactive hover effects
- Clear call-to-action buttons
- "Most Popular" badge for featured product

### 5. Benefits Section
- Two-column layout with visual appeal
- 4 health benefits with icons
- Animated product imagery
- Detailed descriptions

### 6. About Section
- Brand story and heritage
- Statistics showcase:
  - 20+ Years Experience
  - 50K+ Happy Customers
  - 100% Traditional Method
  - Zero Chemicals
- Dark theme for visual contrast

### 7. Testimonials
- Carousel of customer reviews
- 5-star ratings
- Location information
- Navigation controls

### 8. CTA Banner
- Full-width call-to-action
- Phone number for direct contact
- Key selling points (Free Delivery, Quality, Shipping)
- Animated background

### 9. Footer
- Company information
- Quick links navigation
- Product links
- Contact information
- Social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Key Features Implementation

### Animations
- Scroll-triggered animations using Framer Motion
- Floating elements with infinite loop animations
- Hover effects on cards and buttons
- Smooth page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Adaptive typography

### Performance Optimizations
- Code splitting with Vite
- Optimized images
- Lazy loading for sections
- Minimal dependencies

## Customization

### Colors
Update the color scheme in `tailwind.config.js` and component files:
- Primary: `#F5C542`
- Secondary: `#FFF8E7`
- Accent: `#5A3E2B`

### Content
Edit the section files in `src/sections/` to update:
- Product information
- Pricing
- Testimonials
- Contact details
- Brand story

### Components
Reusable UI components are located in `src/components/ui/` and can be customized using Tailwind classes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Credits

Design inspired by premium organic product websites with a focus on traditional values and modern aesthetics.

# OctanLabs Frontend - Claude Development Guide

## 🎯 Project Overview

**Project**: OctanLabs Frontend Website
**Framework**: Next.js 15.5.3 with App Router
**Language**: TypeScript
**Styling**: Tailwind CSS with Custom Design System
**UI Components**: Radix UI Primitives

This is the main marketing website for OctanLabs featuring a cosmic-inspired earth tone design system with glassmorphism effects and dark mode support.

## 🏗️ Project Structure

```
octan-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── about/page.tsx     # About page
│   │   ├── blog/page.tsx      # Blog listing
│   │   ├── case-studies/page.tsx # Case studies
│   │   └── services/page.tsx  # Services page
│   ├── components/            # React components
│   │   ├── ui/                # Design system components (Radix UI)
│   │   ├── providers/         # Context providers
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navigation.tsx    # Main navigation
│   │   ├── Features.tsx      # Features showcase
│   │   ├── Services.tsx      # Services section
│   │   ├── CTA.tsx          # Call-to-action
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Site footer
│   │   ├── ROI.tsx          # ROI calculator
│   │   └── LogoMarquee.tsx  # Partner logos
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utilities and configurations
├── public/                   # Static assets
├── DESIGN_SYSTEM.md         # Complete design system documentation
├── README.md                # Project setup and basic info
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## ⚙️ Development Commands

```bash
# Development
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production (with Turbopack)
npm run start        # Start production server
npm run lint         # Run ESLint

# Quick Start
cd octan-nextjs
npm install
npm run dev
# Visit http://localhost:3000
```

## 🎨 Design System

The project uses a comprehensive **cosmic-inspired earth tone** design system documented in `DESIGN_SYSTEM.md`. Key features:

### Color Palette
- **Primary**: Rich brown (#8B5A2B) with earth tones
- **Secondary**: Light cream (#E8E0D5) for contrast
- **Neutrals**: White backgrounds with dark brown text
- **Dark Mode**: Inverted palette with dark brown backgrounds

### Typography
- **Font**: Inter with OpenType features
- **Scale**: From text-xs (12px) to text-7xl (72px)
- **Hierarchy**: H1-H4 with semantic sizing

### Components
- **Buttons**: 6 variants (primary, secondary, outline, ghost, destructive, link)
- **Cards**: Standard and glassmorphism variants with rounded corners
- **Navigation**: Sticky glassmorphism nav with backdrop blur
- **Badges**: Multiple variants for different use cases

### Key Features
- **Glassmorphism**: Subtle transparency with backdrop blur effects
- **Dark Mode**: Complete theme switching support
- **Responsive**: Mobile-first design with 5 breakpoints
- **Accessibility**: WCAG AA compliant with proper focus states

## 🧩 Component Library

All UI components are built with **Radix UI primitives** and follow the design system patterns:

### Core Components
- `Button` - Multiple variants and sizes
- `Card` - Standard and glassmorphism styles
- `Badge` - Status and category indicators
- `Form` - React Hook Form integration
- `Navigation` - Responsive nav with mobile menu
- `Toast` - Notifications via Sonner

### Layout Components
- `Container` - Max-width wrapper with padding
- `Section` - Consistent spacing patterns
- `Grid` - Responsive grid layouts

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- **sm**: 640px (phones)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (large displays)

## 🌙 Dark Mode

Implemented via CSS custom properties with automatic theme detection:
- Toggle via `document.documentElement.classList.toggle('dark')`
- All components support both themes
- Smooth transitions between modes

## 🔧 Key Dependencies

### Core Framework
- `next@15.5.3` - React framework with App Router
- `react@19.1.0` - Latest React with concurrent features
- `typescript@5` - Type safety

### UI & Styling
- `tailwindcss@3.4.17` - Utility-first CSS
- `@radix-ui/react-*` - Accessible component primitives
- `class-variance-authority` - Component variant management
- `tailwind-merge` - Conditional class merging

### Additional Features
- `next-themes@0.4.6` - Theme switching
- `@tanstack/react-query@5.89.0` - Data fetching
- `react-hook-form@7.62.0` - Form management
- `lucide-react@0.544.0` - Icon library
- `recharts@3.2.1` - Data visualization

## 🎯 Development Guidelines

### Component Creation
1. Follow design system patterns from `DESIGN_SYSTEM.md`
2. Use Radix UI primitives for interactive components
3. Implement both light and dark mode variants
4. Ensure responsive design across all breakpoints
5. Include proper TypeScript typing

### Styling Approach
1. Use Tailwind utility classes
2. Follow the established spacing scale (space-1 to space-24)
3. Use CSS custom properties for colors
4. Apply glassmorphism effects for emphasis only
5. Include hover and focus states

### Code Organization
1. Keep components small and focused
2. Use custom hooks for stateful logic
3. Organize imports: React → third-party → local
4. Follow established file naming conventions
5. Include JSDoc comments for complex components

## 🧪 Testing & Quality

### Code Quality
- ESLint configuration for Next.js
- TypeScript strict mode enabled
- Component prop validation

### Performance
- Next.js Image optimization
- Turbopack for fast builds
- React Query for efficient data fetching
- Tree-shaking via ES modules

## 🚀 Deployment

The site is optimized for deployment on:
- **Vercel** (recommended - zero-config)
- **Netlify**
- **Static hosting** (via `npm run build`)

Build outputs to `.next/` directory with optimized assets.

## 📋 Common Tasks

### Adding New Pages
```bash
# Create new page in app directory
touch src/app/new-page/page.tsx
```

### Creating Components
```bash
# Follow existing component patterns
touch src/components/NewComponent.tsx
```

### Updating Design System
1. Modify `DESIGN_SYSTEM.md` documentation
2. Update `tailwind.config.ts` if needed
3. Update component variants
4. Test across light/dark modes

### Adding Icons
```typescript
import { IconName } from 'lucide-react'
// Use consistent sizing: size-4, size-5, size-6
```

## 📚 Key Files Reference

- `DESIGN_SYSTEM.md` - Complete design system documentation
- `tailwind.config.ts` - Tailwind customizations and theme colors
- `src/app/layout.tsx` - Root layout with providers and fonts
- `src/components/ui/` - Reusable UI component library
- `src/lib/utils.ts` - Utility functions and class merging

## 🔍 Troubleshooting

### Common Issues
1. **Styling not applying**: Check if Tailwind classes are correct
2. **Dark mode not working**: Verify CSS custom properties are defined
3. **TypeScript errors**: Ensure proper typing for Radix UI components
4. **Build failures**: Check for Next.js App Router compliance

### Debug Commands
```bash
npm run lint              # Check for linting issues
npx tsc --noEmit         # Type checking only
npm run build            # Test production build
```

## 🎨 Brand Guidelines

Follow the OctanLabs brand identity:
- **Professional**: Clean, sophisticated design
- **Innovative**: Modern UI patterns with subtle animations
- **Accessible**: High contrast ratios and semantic HTML
- **Cosmic**: Earth-tone palette with glassmorphism effects

---

**Last Updated**: Current
**Version**: 1.0.0
**Status**: Production Ready
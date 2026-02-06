# OctanLabs Design System

## Overview

The OctanLabs design system is built on a **cosmic-inspired earth tone** color palette that conveys trust, professionalism, and innovation. The system emphasizes clean, modern interfaces with subtle animations and glassmorphism effects that create depth and visual interest.

## Brand Identity

### Brand Values
- **Professional**: Clean, sophisticated design that builds trust
- **Innovative**: Modern UI patterns and subtle animations
- **Accessible**: High contrast ratios and semantic HTML
- **Scalable**: Consistent patterns that work across all screen sizes

### Visual Personality
- **Cosmic Earth Tones**: Rich browns, warm creams, and sophisticated neutrals
- **Glassmorphism**: Subtle transparency and backdrop blur effects
- **Minimalist**: Clean layouts with purposeful white space
- **Motion**: Subtle animations that enhance user experience

## Color System

### Primary Colors
```css
/* Light Mode */
--primary: 30 58% 45%;          /* Rich brown - #8B5A2B */
--primary-foreground: 0 0% 100%; /* White */

/* Dark Mode */
--primary: 40 65% 55%;          /* Brighter brown - #D4A574 */
--primary-foreground: 20 14.3% 4.1%; /* Dark brown */
```

### Secondary Colors
```css
/* Light Mode */
--secondary: 45 25% 85%;        /* Light cream - #E8E0D5 */
--secondary-foreground: 20 14.3% 4.1%; /* Dark brown */

/* Dark Mode */
--secondary: 12 6.5% 15.1%;     /* Dark gray - #2A2520 */
--secondary-foreground: 40 15% 95%; /* Light cream */
```

### Neutral Colors
```css
/* Light Mode */
--background: 0 0% 100%;        /* White */
--foreground: 20 14.3% 4.1%;    /* Dark brown */
--muted: 40 15% 95%;            /* Very light cream */
--muted-foreground: 25 5.3% 44.7%; /* Medium gray */
--accent: 40 45% 88%;           /* Warm accent - #E6D7C3 */
--border: 40 15% 90%;           /* Light border - #E5DDD4 */

/* Dark Mode */
--background: 20 14.3% 4.1%;    /* Dark brown */
--foreground: 40 15% 95%;       /* Light cream */
--muted: 12 6.5% 15.1%;         /* Dark gray */
--muted-foreground: 24 5.4% 63.9%; /* Medium gray */
--accent: 12 6.5% 15.1%;        /* Dark accent */
--border: 12 6.5% 25.1%;        /* Dark border */
```

### Semantic Colors
```css
--destructive: 0 84.2% 60.2%;   /* Red for errors */
--destructive-foreground: 0 0% 98%; /* White text on red */
--ring: 30 58% 45%;             /* Focus ring - matches primary */
```

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif
- **Features**: OpenType features enabled (cv02, cv03, cv04, cv11)

### Type Scale
```css
/* Font Sizes with Line Heights */
text-xs: 0.75rem / 1rem        /* 12px / 16px */
text-sm: 0.875rem / 1.25rem     /* 14px / 20px */
text-base: 1rem / 1.5rem        /* 16px / 24px */
text-lg: 1.125rem / 1.75rem     /* 18px / 28px */
text-xl: 1.25rem / 1.75rem      /* 20px / 28px */
text-2xl: 1.5rem / 2rem         /* 24px / 32px */
text-3xl: 1.875rem / 2.25rem    /* 30px / 36px */
text-4xl: 2.25rem / 2.5rem      /* 36px / 40px */
text-5xl: 3rem / 1               /* 48px / 48px */
text-6xl: 3.75rem / 1            /* 60px / 60px */
text-7xl: 4.5rem / 1             /* 72px / 72px */
```

### Typography Hierarchy
- **H1**: `text-5xl md:text-6xl font-bold` - Hero headlines
- **H2**: `text-3xl md:text-4xl font-bold` - Section headers
- **H3**: `text-xl font-semibold` - Card titles
- **H4**: `text-lg font-semibold` - Subsection headers
- **Body**: `text-base` - Default text
- **Small**: `text-sm` - Supporting text
- **Caption**: `text-xs` - Labels and captions

## Spacing System

### Container
```css
max-width: 1400px (2xl breakpoint)
padding: 2rem (32px)
center: true
```

### Spacing Scale
```css
/* Tailwind spacing scale */
space-1: 0.25rem    /* 4px */
space-2: 0.5rem     /* 8px */
space-3: 0.75rem    /* 12px */
space-4: 1rem       /* 16px */
space-6: 1.5rem     /* 24px */
space-8: 2rem       /* 32px */
space-12: 3rem      /* 48px */
space-16: 4rem      /* 64px */
space-20: 5rem      /* 80px */
space-24: 6rem      /* 96px */
```

### Section Spacing
- **Small sections**: `py-8` (32px)
- **Medium sections**: `py-12` (48px)
- **Large sections**: `py-20` (80px)

## Border Radius

### Radius Scale
```css
--radius: 0.5rem;              /* 8px - Base radius */
rounded-sm: calc(var(--radius) - 4px)  /* 4px */
rounded-md: calc(var(--radius) - 2px)  /* 6px */
rounded-lg: var(--radius)              /* 8px */
rounded-xl: 0.75rem                    /* 12px */
rounded-2xl: 1rem                      /* 16px */
rounded-3xl: 1.5rem                    /* 24px */
```

### Usage Guidelines
- **Cards**: `rounded-xl` or `rounded-2xl`
- **Buttons**: `rounded-md` or `rounded-lg`
- **Inputs**: `rounded-md`
- **Hero sections**: `rounded-3xl`
- **Navigation**: `rounded-2xl`

## Shadows

### Shadow Scale
```css
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
```

### Usage Guidelines
- **Cards**: `shadow-lg` with hover `shadow-xl`
- **Navigation**: `shadow-lg`
- **Hero sections**: `shadow-lg`
- **Buttons**: No shadow (flat design)
- **Modals**: `shadow-xl`

## Components

### Buttons

#### Variants
```css
/* Default (Primary) */
bg-primary text-primary-foreground hover:bg-primary/90

/* Secondary */
bg-secondary text-secondary-foreground hover:bg-secondary/80

/* Outline */
border border-input bg-background hover:bg-accent hover:text-accent-foreground

/* Ghost */
hover:bg-accent hover:text-accent-foreground

/* Destructive */
bg-destructive text-destructive-foreground hover:bg-destructive/90

/* Link */
text-primary underline-offset-4 hover:underline
```

#### Sizes
```css
/* Small */
h-9 rounded-md px-3

/* Default */
h-10 px-4 py-2

/* Large */
h-11 rounded-md px-8

/* Icon */
h-10 w-10
```

### Cards

#### Base Card
```css
rounded-lg border bg-card text-card-foreground shadow-sm
```

#### Glassmorphism Card
```css
rounded-xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg
```

#### Card Components
- **CardHeader**: `flex flex-col space-y-1.5 p-6`
- **CardTitle**: `text-2xl font-semibold leading-none tracking-tight`
- **CardDescription**: `text-sm text-muted-foreground`
- **CardContent**: `p-6 pt-0`
- **CardFooter**: `flex items-center p-6 pt-0`

### Navigation

#### Navigation Bar
```css
sticky top-2 z-40 lg:top-5
bg-background/80 rounded-2xl border-2 border-border/50 p-3 backdrop-blur-sm shadow-lg
```

#### Navigation Links
```css
inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors
```

### Badges

#### Badge Variants
```css
/* Default */
inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2

/* Secondary */
border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80

/* Destructive */
border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80

/* Outline */
text-foreground
```

## Layout Patterns

### Container System
```css
/* Main container */
mx-auto max-w-7xl px-6

/* Section spacing */
py-8 md:py-12 lg:py-20

/* Grid layouts */
grid gap-6 md:grid-cols-2 lg:grid-cols-3
```

### Hero Section Pattern
```css
/* Hero container */
relative py-8 md:py-12 bg-background

/* Hero card */
relative overflow-hidden rounded-3xl border-2 border-border/50 bg-background/80 backdrop-blur-sm shadow-lg

/* Hero content */
grid lg:grid-cols-2 gap-8 p-8 lg:p-12 pb-6 lg:pb-8 min-h-[380px] items-center
```

### Feature Grid Pattern
```css
/* Grid container */
grid gap-8 md:grid-cols-2 lg:grid-cols-3

/* Feature card */
group relative rounded-xl border-2 border-border/50 bg-background/80 p-6 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm
```

## Animations

### Keyframe Animations
```css
/* Fade in */
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px) }
  100% { opacity: 1; transform: translateY(0) }
}

/* Scale in */
@keyframes scale-in {
  0% { transform: scale(0.95); opacity: 0 }
  100% { transform: scale(1); opacity: 1 }
}

/* Marquee scroll */
@keyframes marquee {
  0% { transform: translateX(0) }
  100% { transform: translateX(-100%) }
}
```

### Animation Classes
```css
/* Fade in */
animate-fade-in: fade-in 0.3s ease-out

/* Scale in */
animate-scale-in: scale-in 0.2s ease-out

/* Marquee */
animate-marquee: marquee 30s linear infinite

/* Hover scale */
hover-scale: transition-transform duration-200 hover:scale-105
```

## Responsive Design

### Breakpoints
```css
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

### Mobile-First Approach
- Start with mobile styles
- Use `md:`, `lg:`, `xl:` prefixes for larger screens
- Test on actual devices, not just browser dev tools

## Accessibility

### Color Contrast
- **AA Standard**: 4.5:1 for normal text
- **AAA Standard**: 7:1 for large text
- All color combinations meet WCAG guidelines

### Focus States
```css
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Include alt text for images
- Use ARIA labels where appropriate
- Ensure keyboard navigation works

## Dark Mode

### Implementation
- Uses CSS custom properties
- Toggle with `dark` class on `html` element
- All components support both themes

### Dark Mode Colors
- **Background**: Dark brown instead of white
- **Text**: Light cream instead of dark brown
- **Primary**: Brighter brown for better contrast
- **Borders**: Darker borders for subtle definition

## Usage Guidelines

### Do's
- ✅ Use the established color palette consistently
- ✅ Maintain proper spacing and typography hierarchy
- ✅ Apply glassmorphism effects sparingly for emphasis
- ✅ Use subtle animations to enhance UX
- ✅ Test on multiple devices and screen sizes
- ✅ Ensure proper contrast ratios for accessibility

### Don'ts
- ❌ Don't use colors outside the defined palette
- ❌ Don't overuse glassmorphism effects
- ❌ Don't create custom spacing values outside the scale
- ❌ Don't use more than 3 font sizes in a single component
- ❌ Don't ignore accessibility requirements
- ❌ Don't use animations that could cause motion sickness

## Implementation

### CSS Custom Properties
All colors are defined as CSS custom properties in `globals.css` for easy theming and maintenance.

### Tailwind Configuration
The design system is built on Tailwind CSS with custom configurations in `tailwind.config.ts`.

### Component Library
UI components are built using Radix UI primitives with custom styling that follows the design system.

## Future Considerations

### Planned Additions
- **Icon System**: Consistent icon library and usage guidelines
- **Illustration Style**: Brand-consistent illustration patterns
- **Micro-interactions**: More detailed animation guidelines
- **Data Visualization**: Charts and graphs styling
- **Form Components**: Enhanced form styling and validation states

### Maintenance
- Regular accessibility audits
- Performance optimization reviews
- Cross-browser compatibility testing
- User feedback integration

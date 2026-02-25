# Genesis.live Clone - Product Requirements Document

## Overview
A pixel-perfect clone of the Genesis.live website - a Business Sustainability platform powered by Soil Intelligence. This is a frontend prototype with all mock data.

## Design System
- **Primary Color**: Deep burgundy/wine (HSL: 340 65% 35%) for CTAs
- **Accent Color**: Sustainability green (HSL: 145 45% 42%) for data/positive metrics
- **Typography**: Inter (body) + Playfair Display (headings/accents)
- **Shadows**: Layered shadow system (soft, card, hover, elevated)
- **Radius**: 0.75rem base with xl variants

## Sections Implemented
1. **Navbar** - Fixed, transparent-to-frosted on scroll, mobile hamburger menu
2. **Hero** - Full-screen landscape background, headline, dual CTAs, stat overlay cards
3. **Business at Risk** - Dark soil-textured section with animated counters, metric cards
4. **Logo Carousel** - Infinite scrolling client logos (LVMH, Chandon, SLB, etc.)
5. **Solutions** - Two side-by-side cards for Industrials & Suppliers with data viz
6. **Benchmark** - Scrolling crop image carousel (9 raw materials)
7. **Platform** - Lavender gradient section, 3 features, 3 dashboard preview cards
8. **Science** - World map with animated country dots, 3 methodology cards with images
9. **Testimonials** - Two client showcase cards (Chandon, Amarenco)
10. **Footer** - Navigation, newsletter signup, contact info

## Tech Stack
- React.js with React Router
- Tailwind CSS with custom design tokens
- Framer Motion for animations
- Shadcn/UI components (Card, Badge, Button, Input, Separator)
- Lucide React icons

## Status
- All data is MOCKED (frontend prototype only)
- Newsletter form works locally (no backend)
- All sections responsive (mobile-first)

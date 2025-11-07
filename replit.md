# AstraFlux Sneaker Marketing Website

## Overview

This is a modern, animated marketing website for AstraFlux - a fictional AI-powered sneaker brand that combines mythological themes with futuristic technology. The site showcases the product through interactive sections, 3D effects, smooth scroll animations, and a stunning grain gradient shader background powered by @paper-design/shaders-react. Built with React, TypeScript, Vite, and Express, it uses a fullstack architecture with shadcn/ui for the design system.

**Recent Changes (Nov 7, 2025):**
- Successfully migrated from Lovable to Replit's fullstack_js environment
- Integrated GrainGradient shader component in Hero section with custom color palette
- Updated color scheme to dark mode with colors: #000a0f (background), #d7cbc6 (foreground), #beae60 (secondary), #c6750c (primary)

## User Preferences

Preferred communication style: Simple, everyday language.
Color Scheme: Dark mode website with #000a0f, #d7cbc6, #beae60, #c6750c

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured with SWC for fast compilation
- **Wouter** for lightweight client-side routing (single-page application)
- Client code lives in `/client` directory with entry point at `/client/src/main.tsx`

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CVA (Class Variance Authority)** for managing component variants
- Custom CSS variables for theming with a dark cosmic/space aesthetic
- Custom fonts: Inter (body), Playfair Display (accents), Brockmann (display)

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API calls
- Custom `queryClient` configuration in `/client/src/lib/queryClient.ts`
- API requests abstracted through `apiRequest` utility function
- Local component state using React hooks

**Styling Approach**
- Cosmic/space theme with dark backgrounds and vibrant accent colors
- Custom animations using CSS classes and Intersection Observer API for scroll-triggered effects
- Responsive design with mobile-first breakpoints
- Glass-morphism effects and gradient overlays for visual depth

**Component Structure**
- Page components in `/client/src/pages/` (Index, NotFound)
- Reusable UI components in `/client/src/components/` and `/client/src/components/ui/`
- Custom hooks in `/client/src/hooks/`
- Modular component architecture with each section as a separate component (Hero, Features, CTA, etc.)

### Backend Architecture

**Server Framework**
- **Express.js** server running on port 5000
- Single entry point at `/server/index.ts`
- Separation between development (Vite middleware) and production (static file serving)

**Development vs Production**
- Development mode: Vite dev server with HMR integrated as Express middleware
- Production mode: Serves pre-built static files from `/dist/public`
- Environment detection via `app.get("env")`

**API Layer**
- Routes defined in `/server/routes.ts` and registered with Express app
- RESTful API endpoints (example: `/api/examples`)
- Request/response handling with JSON middleware

**Data Storage**
- In-memory storage implementation (`MemStorage` class in `/server/storage.ts`)
- Storage interface (`IStorage`) allows for easy swapping to database implementation
- Example CRUD operations demonstrate the pattern
- Currently no persistent database - data resets on server restart

**Schema & Validation**
- Shared schema definitions in `/shared/schema.ts` using Drizzle ORM syntax
- **Zod** for runtime validation via `drizzle-zod` integration
- Type-safe contracts between frontend and backend
- PostgreSQL table definitions (prepared for future database integration)

### External Dependencies

**UI & Animation Libraries**
- `@radix-ui/*` - Accessible component primitives (20+ components)
- `@paper-design/shaders-react` - WebGL shader effects for visual enhancements
- `lottie-react` - Lottie animation playback
- `embla-carousel-react` - Touch-friendly carousel component
- `lucide-react` - Icon library
- `sonner` & custom toast system - User notifications

**Form Management**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolvers
- `zod` - Schema validation

**Data Layer**
- `@tanstack/react-query` - Async state management
- `drizzle-orm` - Type-safe SQL query builder
- `drizzle-zod` - Schema validation bridge

**Utilities**
- `clsx` & `tailwind-merge` - Conditional className utilities
- `class-variance-authority` - Component variant management
- `date-fns` - Date manipulation
- `cmdk` - Command menu implementation

**Development Tools**
- `tsx` - TypeScript execution for server
- `@vitejs/plugin-react-swc` - Fast React refresh
- ESLint with TypeScript support
- Multiple tsconfig files for different contexts (app, node, main)

**Future Integration Points**
- Database schema defined for PostgreSQL via Drizzle ORM
- Form submission endpoints ready for email/CRM integration
- Asset management structure in `/attached_assets/` for images and media
- Newsletter subscription placeholder in Newsletter component
- CTA form for waitlist/early access collection
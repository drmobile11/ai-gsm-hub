
# GSM Hub Multi-Module Application

This project is structured as three separate applications (Admin, Store, and Reseller) that can be deployed independently or together.

## Project Structure

The application is divided into three main modules:

- **Admin Panel**: Management dashboard for administrators
- **Store**: Customer-facing e-commerce interface
- **Reseller Portal**: Dashboard for resellers/partners

Each module has its own:
- Entry point (`admin.tsx`, `store.tsx`, `reseller.tsx`)
- Layout components
- Pages and components
- Routing configuration

## Running the Full Application

To run the complete application:

```sh
# Install dependencies
npm install

# Start the development server
npm run dev
```

## Running Modules Independently

Each module can be run independently using the Vite config files:

### Admin Panel

```sh
# Run admin panel in development mode
npm run dev -- --config vite.config.admin.ts

# Build only the admin panel
npm run build -- --config vite.config.admin.ts

# Serve the admin panel
npm run preview -- --config vite.config.admin.ts
```

### Store

```sh
# Run store in development mode
npm run dev -- --config vite.config.store.ts

# Build only the store
npm run build -- --config vite.config.store.ts

# Serve the store
npm run preview -- --config vite.config.store.ts
```

### Reseller Portal

```sh
# Run reseller portal in development mode
npm run dev -- --config vite.config.reseller.ts

# Build only the reseller portal
npm run build -- --config vite.config.reseller.ts

# Serve the reseller portal
npm run preview -- --config vite.config.reseller.ts
```

## Deploying Modules to Separate Domains

To deploy each module to its own domain:

1. Build each module separately as shown above
2. Deploy the content of each `dist` folder to its respective domain

### Example Deployment Strategy

- Admin Panel: `admin.example.com` (deploy contents of dist/admin folder)
- Store: `store.example.com` (deploy contents of dist/store folder)
- Reseller Portal: `reseller.example.com` (deploy contents of dist/reseller folder)

## Using Modules as Separate Projects

If you want to extract a module as a standalone project:

1. Create a new directory for your project
2. Copy the following files/directories:
   - `src/modules/[module-name]` (e.g., `src/modules/admin`)
   - `src/index.css`
   - `public` folder
   - Configuration files (vite.config.[module-name].ts, tsconfig.json, etc.)

3. Create a new package.json with the required dependencies:

```json
{
  "name": "gsm-hub-[module-name]",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@radix-ui/react-toast": "^1.2.1",
    "@tanstack/react-query": "^5.56.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.0",
    "react-router-dom": "^6.26.2",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/react": "^18.2.67",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react-swc": "^3.6.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.4.5",
    "vite": "^5.2.3"
  }
}
```

4. Create a new entry point file (e.g., `src/main.tsx`):

```tsx
import { createRoot } from 'react-dom/client';
import './index.css';
import { AdminApp } from './modules/admin'; // Change this import based on module

createRoot(document.getElementById("root")!).render(<AdminApp />);
```

5. Run `npm install` to install dependencies
6. Start the development server with `npm run dev`

## Shared Components and Utilities

When extracting a module as a standalone project, remember to copy:

- UI components from `src/components/ui` used by the module
- Utility functions from `src/lib` used by the module
- Hooks from `src/hooks` used by the module

## Technology Stack

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- TanStack Query

## Additional Notes

- Each module uses TanStack Query for data fetching with its own QueryClient
- Routes are configured in each module's main App component
- UI components from shadcn-ui are shared across modules


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

Each module can be built and served independently:

### Admin Panel

```sh
# Build only the admin panel
npm run build -- --config vite.config.admin.ts

# Serve the admin panel
npm run preview -- --config vite.config.admin.ts
```

### Store

```sh
# Build only the store
npm run build -- --config vite.config.store.ts

# Serve the store
npm run preview -- --config vite.config.store.ts
```

### Reseller Portal

```sh
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

- Admin Panel: `admin.example.com` (deploy contents of admin build)
- Store: `store.example.com` (deploy contents of store build)
- Reseller Portal: `reseller.example.com` (deploy contents of reseller build)

## Using Modules as Separate Projects

If you want to extract a module as a standalone project:

1. Create a new directory for your project
2. Copy the following files/directories:
   - `src/modules/[module-name]` (e.g., `src/modules/admin`)
   - `src/[module-name].tsx` (e.g., `src/admin.tsx`)
   - `src/index.css`
   - `public` folder
   - Configuration files (package.json, vite.config.ts, tsconfig.json, etc.)

3. Modify `package.json` dependencies to include only what you need
4. Update import paths in the code if necessary

## Shared Components and Utilities

When extracting a module as a standalone project, remember to copy:

- UI components from `src/components/ui` used by the module
- Utility functions from `src/lib` used by the module
- Hooks from `src/hooks` used by the module

## Customizing Configuration

Each module can have its own configuration by creating separate Vite config files:

- `vite.config.admin.ts`
- `vite.config.store.ts`
- `vite.config.reseller.ts`

Example configuration for an individual module:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist/admin",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "admin.html"),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

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

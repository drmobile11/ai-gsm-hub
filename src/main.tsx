
import { createRoot } from 'react-dom/client';
import './index.css';

// Dynamically import the appropriate app based on the MODULE environment variable
// Using import.meta.env which is the proper way to access environment variables in Vite
const module = import.meta.env.MODE === 'development' 
  ? (import.meta.env.VITE_MODULE || import.meta.env.MODULE || 'admin')
  : (import.meta.env.MODULE || 'admin');

async function loadApp() {
  let App;
  
  switch (module) {
    case 'store':
      const { StoreApp } = await import('./modules/store');
      App = StoreApp;
      break;
    case 'reseller':
      const { ResellerApp } = await import('./modules/reseller');
      App = ResellerApp;
      break;
    case 'admin':
    default:
      const { AdminApp } = await import('./modules/admin');
      App = AdminApp;
      break;
  }
  
  createRoot(document.getElementById("root")!).render(<App />);
}

loadApp();

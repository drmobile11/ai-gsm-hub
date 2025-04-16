
import { createRoot } from 'react-dom/client';
import './index.css';

// Dynamically import the appropriate app based on the MODULE environment variable
const module = import.meta.env.MODE === 'development' 
  ? (import.meta.env.VITE_MODULE || process.env.MODULE || 'admin')
  : (process.env.MODULE || 'admin');

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

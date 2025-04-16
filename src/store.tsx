
import { createRoot } from 'react-dom/client';
import { StoreApp } from './modules/store';
import './index.css';

createRoot(document.getElementById("root")!).render(<StoreApp />);


import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Preload platform icons
const platformIcons = [
  '/images/platforms/facebook.svg',
  '/images/platforms/whatsapp.svg',
  '/images/platforms/instagram.svg',
  '/images/platforms/sendpulse.svg',
  '/images/platforms/wordpress.svg',
  '/images/platforms/make.svg',
  '/images/platforms/n8n.svg',
  '/images/platforms/zapier.svg',
  '/images/platforms/shopify.svg',
  '/images/platforms/woocommerce.svg',
];

// Create preload links
platformIcons.forEach(icon => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = icon;
  link.as = 'image';
  link.type = 'image/svg+xml';
  document.head.appendChild(link);
});

createRoot(document.getElementById("root")!).render(<App />);

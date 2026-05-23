import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <main style={{ background: '#03050a', color: '#c8f3ff', minHeight: '100vh', padding: 24 }}><h1>SmartPark Admin</h1><p>KYC queue, disputes, RTO/towing management, and system health.</p></main>;
}

createRoot(document.getElementById('root')!).render(<App />);

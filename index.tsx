import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Initializing App...");

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("App mounted successfully.");
} catch (error) {
  console.error("CRITICAL ERROR: Failed to mount app", error);
  // Affiche l'erreur sur l'écran au lieu d'un écran noir
  document.body.innerHTML = `
    <div style="color: white; background: #0f172a; height: 100vh; padding: 20px; font-family: sans-serif;">
      <h1 style="color: #ef4444;">Application Error</h1>
      <p>The application failed to start.</p>
      <pre style="background: #1e293b; padding: 10px; border-radius: 5px; overflow: auto;">${error}</pre>
      <p>Check console for more details.</p>
    </div>
  `;
}
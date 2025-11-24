
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Démarrage de l'application...");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Application montée avec succès.");
  } catch (error) {
    console.error("ERREUR CRITIQUE: Impossible de monter l'application", error);
    document.body.innerHTML = `
      <div style="color: white; background: #0f172a; height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; font-family: sans-serif;">
        <div>
            <h1 style="color: #ef4444; font-size: 2rem; margin-bottom: 1rem;">Erreur de Démarrage</h1>
            <p>L'application n'a pas pu se lancer.</p>
            <pre style="background: #1e293b; padding: 10px; border-radius: 5px; margin-top: 1rem; text-align: left; display: inline-block;">${error.message}</pre>
        </div>
      </div>
    `;
  }
} else {
  console.error("Impossible de trouver l'élément #root");
}

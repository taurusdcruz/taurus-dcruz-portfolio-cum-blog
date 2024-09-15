import React from 'react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './styles/main.scss';
import './i18n';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render( 
  <ThemeProvider>
    <App />
  </ThemeProvider>

);

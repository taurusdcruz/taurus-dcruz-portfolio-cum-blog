import React from 'react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import './styles/main.scss';
import './i18n';
import { Helmet } from 'react-helmet'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render( <React.StrictMode>
  <Helmet>
    <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;" />
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </Helmet>
</React.StrictMode>);

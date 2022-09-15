import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContext, ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <ThemeContext.Consumer>
      {(context) => (
        <App
          background={context.background}
          setBackground={context.setBackground}
        />
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);
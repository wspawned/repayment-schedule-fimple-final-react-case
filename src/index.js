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
          theme={context.theme}
          setTheme={context.setTheme}
        />
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);
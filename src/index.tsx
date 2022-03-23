import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './components';
import { GlobalStyles } from './GlobalStyles';
import { palette } from './constants';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ palette }}>
      <GlobalStyles />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

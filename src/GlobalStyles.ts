import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    scroll-behavior: smooth;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.palette.black};
    box-sizing: border-box;
    color: ${({ theme }) => theme.palette.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    flex-direction: column;
    flex: 1;
    margin: 0;
    padding: 0;
    position: relative;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
  }
  
  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 110%;
    margin: 0;
  }
  
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`;

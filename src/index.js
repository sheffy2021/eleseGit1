import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import myTheme from './theme/theme'

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

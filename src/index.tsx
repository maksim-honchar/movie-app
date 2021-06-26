import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './redux/store';
import App from './App';
import { theme } from './theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();

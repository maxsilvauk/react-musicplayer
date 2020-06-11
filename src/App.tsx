import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import theme from '~styles/theme';
import { GlobalStyles } from '~styles/index';
import { Routes } from '~root/routes';
import { store } from '~store/index';

const App = () => (
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <GlobalStyles />
      <Routes />
    </StoreProvider>
  </ThemeProvider>
);

export default hot(App);

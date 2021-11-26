import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@features/theme';
import { store } from '@store';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';

ReactDOM.render(
  <StrictMode>
    <StoreProvider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root'),
);

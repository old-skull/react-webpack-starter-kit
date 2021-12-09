import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@features/theme';
import { store } from '@store';
import { ComponentProps, ComponentType, FC, JSXElementConstructor } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

type Providers = [ComponentType, ComponentProps<JSXElementConstructor<unknown>>?][];

const combine = (providers: Providers): FC =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) =>
        (
          <AccumulatedProviders>
            <Provider {...props}>{children}</Provider>
          </AccumulatedProviders>
        ),
    ({ children }) => <>{children}</>,
  );

export const AllProviders = combine([
  [StoreProvider, { store }],
  [BrowserRouter],
  [ChakraProvider, { theme }],
]);

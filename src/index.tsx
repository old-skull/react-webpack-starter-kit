import { AllProviders } from '@shared/utils';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/app';

ReactDOM.render(
  <StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </StrictMode>,
  document.getElementById('root'),
);

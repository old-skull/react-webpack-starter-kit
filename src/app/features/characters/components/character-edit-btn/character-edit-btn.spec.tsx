import { mount } from '@cypress/react';
import { AllProviders } from '@shared/utils';
import { CharacterEditBtn } from '.';

it('renders button', () => {
  mount(
    <AllProviders>
      <CharacterEditBtn id="1" />
    </AllProviders>,
  );
  cy.get('button').contains('Edit');
});

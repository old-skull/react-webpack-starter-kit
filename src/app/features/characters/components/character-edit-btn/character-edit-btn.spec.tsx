import { mount } from '@cypress/react';
import { AllProviders } from '@shared/utils';
import { CharacterEditBtn } from '.';

describe('CharacterEditBtn', () => {
  describe('Render', () => {
    it('should have `Edit` label', () => {
      mount(
        <AllProviders>
          <CharacterEditBtn id="1" />
        </AllProviders>,
      );

      cy.get('a').contains('Edit');
    });
  });

  describe('Attrs', () => {
    it('should have `href` attr', () => {
      mount(
        <AllProviders>
          <CharacterEditBtn id="1" />
        </AllProviders>,
      );

      cy.get('a').should('have.attr', 'href');
    });

    it('should have `href` attr that matches edit page url', () => {
      const id = '1';

      mount(
        <AllProviders>
          <CharacterEditBtn id={id} />
        </AllProviders>,
      );

      const targetHref = `/characters/edit/${id}`;

      cy.get('a').should('have.attr', 'href', targetHref);
    });
  });
});

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render `Witcher` link', () => {
    cy.get('a').contains('Witcher');
  });
});

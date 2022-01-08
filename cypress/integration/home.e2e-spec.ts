describe('Home', () => {
  const rootUrl = '/';

  beforeEach(() => {
    cy.visit(rootUrl);
  });

  after(() => {
    cy.visit(rootUrl);
  });

  it('should render `Witcher` link', () => {
    cy.get('a').contains('Witcher');
  });
});

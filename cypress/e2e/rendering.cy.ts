// https://on.cypress.io/api

describe('Rendering test', () => {
  it('visits the app root url', () => {
    cy.visit('/');
    cy.get('.main-widget');
    cy.get('.main-widget .main-widget');
  });

  it('shows the title of default queried place', () => {
    cy.visit('/');
    cy.contains('h2.city-name', 'Poznań');
  });
});

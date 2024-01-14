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

  it('shows the title of custom queried place (1)', () => {
    cy.visit('/?city=Mexico');
    cy.contains('h2.city-name', 'Mexico');
  });

  it('shows the title of custom queried place (2)', () => {
    cy.visit('/?city=New York');
    cy.contains('h2.city-name', ' New York');
  });

  it('shows the Weather details data tiles', () => {
    cy.visit('/');
    cy.contains('h2.city-name', 'Poznań');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Sunrise")');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Sunset")');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Timezone")');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Temperature")');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Feels like")');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Wind")');
    cy.get('.weather-details-section').get('.col-detail-tile').filter(':contains("Direction")');
  });
});

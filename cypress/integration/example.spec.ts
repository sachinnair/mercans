// https://docs.cypress.io/api/introduction/api.html

describe('Test page on url hit', () => {
  it('visits the routes on clicking menu items', () => {
    cy.visit('/docs')
    cy.contains('main', 'Checking out: docs')
    cy.contains('leaves').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/leaves`);
  })

  it('visits Not Found route when invalid route is hit', () => {
    cy.visit('/malicious')
    cy.url().should('eq', `${Cypress.config().baseUrl}/not-found`);
  })
})

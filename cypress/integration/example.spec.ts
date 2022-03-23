// https://docs.cypress.io/api/introduction/api.html

describe('Test page on url hit', () => {
  it('visits the app root url', () => {
    cy.visit('/docs')
    cy.contains('main', 'Checking out: docs')
    cy.contains('leaves').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/leaves`);
  })
})

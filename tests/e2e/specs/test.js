// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Probando crear usuario en vista Login', () => {
    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('nuevo@tata.com');
    cy.get('#input-2').type('12341234');
    cy.get('#crear_usuario').click();

  })
})

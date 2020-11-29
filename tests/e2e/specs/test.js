// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Probando crear usuario en vista Login', () => {
    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('test8@tata.com');
    cy.get('#input-2').type('12341234');
    cy.get('#crear_usuario').click();
    cy.get('#botoneditar').click();
    cy.get('#campocod').type('R-010');
    cy.get('#camponombre').type('Respaldo Invierno fres');
    cy.get('#campostock').type(99);
    cy.get('#campoprecio').type(9999);
    cy.get('#subircambios').click();
    cy.get('#botonsalir').click();


  })
  it('Probando login con usuario registrado', () => {

    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('quesito@game.com');
    cy.get('#input-2').type('12341234');
    cy.get('#boton-login').click();

  })

})






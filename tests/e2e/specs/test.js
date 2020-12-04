// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Probando crear usuario en vista Login y editando el crud', () => {
    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('test44@tata.com');
    cy.get('#input-2').type('12341234');
    cy.get('#crear_usuario').click();
    cy.wait(3000);
    cy.get('#botoneditar').click();
    cy.get('#campocod').type('R-013');
    cy.get('#camponombre').type(' nuevo nombre desde testin para editar'); // probar editar producto
    cy.get('#campostock').type(990);
    cy.get('#campoprecio').type(21990);
    cy.get('#campodescripcion').type('Lo mas nuevo');
    cy.get('#subircambios').click();
    cy.get('#botonsalir').click();   // fin de prueba


  })
  it('Probando login con usuario registrado y agregar producto nuevo', () => {

    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('quesito@game.com');
    cy.get('#input-2').type('12341234');
    cy.get('#boton-login').click();
    cy.get('#input-grup-1').type('R-026');
    cy.get('#input-grup-2').type('Test');
    cy.get('#input-grup-3').type(5);
    cy.get('#input-grup-4').type(29900);
    cy.get('#input-grup-5').type('Agregando producto desde testing');

    cy.get('#agregar-productos').click(); // boton para agregar el nuevo item o producto
    cy.wait(3000);
    cy.get('#botonsalir').click(); // fin de prueba


  })

  it('Probando eliminar  producto', () => {

    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('quesito@game.com');
    cy.get('#input-2').type('12341234');
    cy.get('#boton-login').click();
    cy.get('#eliminar-producto').click(); // eliminar el producto
    
  })


})








// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Probando crear usuario en vista Login', () => {
    cy.visit('/');
    cy.get('#entrar').click();
    cy.get('#input-1').type('test50@tata.com');
    cy.get('#input-2').type('12341234');
    cy.get('#crear_usuario').click();
    cy.get('#boton_editar').click();
    cy.get('#campo_cod').type('R-007');
    cy.get('#campo_nombre').type('Respaldo Invierno fresco');
    cy.get('#campo_stock').type(99);
    cy.get('#campo_precio').type(9999);
    cy.get('#subir_cambios').click();
    cy.get('#boton_salir').click();




  })
  // it('Probando crear usuario en vista inventario', () => {
  //   cy.visit('/inventario');
    // cy.get('#input-2').type('12341234');
    // cy.get('#crear_usuario').click();

  // })
})

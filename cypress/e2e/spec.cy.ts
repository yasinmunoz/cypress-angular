describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.get('h1').contains('cypress-angular')
  });

  context ('check the home', () => {
    beforeEach (() => {
      cy.visit('http://localhost:4200');
    });

    it ('should visit home', () => {
      cy.get('h1').contains('cypress-angular');
    });

    it ('check ul arroz', () => {
      cy.get ('ul')
        .children('li')
        .contains('Arroz')
    });

    it ('check link google', () => {
      cy.get('ul')
        .children('li')
        .children('a')
        .contains('Google')
    })
  })
})


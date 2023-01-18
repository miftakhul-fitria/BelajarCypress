describe('template spec', () => {
  // Positive Login
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.radius').contains("Login").click()
  })

  // Negative Login
  it('failed with username invalid', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("miftakhulfitria")
    cy.get('#password').type("SuperSecretPassword")
    cy.get('.radius').contains("Login").click()
  })

  // Negative Login
  it('failed with password invalid', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("hello")
    cy.get('.radius').contains("Login").click()
  })
})
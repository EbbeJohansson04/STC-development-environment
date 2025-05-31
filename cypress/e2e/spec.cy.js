describe('template spec', () => {
  it('passes', () => {
    cy.visit('127.0.0.1:5500')
    cy.get("#btn").click()
    cy.get("#message").should("have.text", "unicorn")
  })
})
describe('Memedeabox UI', () => {
  it('should throw an error if there are network problems', () => {
    cy.intercept('http://localhost:3001/api/v1/memes/', {
      method: "GET",
      fixture: "" 
    })
    cy.visit('http://localhost:3000/')
    // cy.contains('Network error')
  })

  it('should have inputs to add new memes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('form').find('input').should('have.value', '')
    cy.get("[name='title']").type('Test Title')
    cy.get("[name='url']").type('Test URL')
    cy.get("[name='save-button']").click()
  })
})
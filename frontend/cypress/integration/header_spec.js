describe('header', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  afterEach(() => {
    cy.get('[data-testid=Brightness7Icon] > path').click()
  })

  it('starts with white background-color and can switch to night mode', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('[data-testid=Brightness4Icon] > path').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)')
  })
})

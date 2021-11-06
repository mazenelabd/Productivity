describe('home and lists', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.findByRole('textbox', { name: /email address/i }).type(
      'john@example.com'
    )
    cy.get('#outlined-adornment-password').type('123456')
    cy.findByRole('button', { name: /login/i }).click()
  })
  afterEach(() => {
    cy.findByRole('button', { name: /logout/i }).click()
  })

  it('user can create new list, rename it and delete a list', () => {
    cy.wait(500)

    // create new list and it should be selected after creation
    cy.findByRole('tab', { name: /\+ new list/i }).click()
    cy.findByRole('textbox').type('my list{enter}')
    cy.findByRole('tab', { name: /my list/i })
      .should('exist')
      .should('have.class', 'Mui-selected')

    //rename the list
    cy.findByRole('button', { name: /rename list/i }).click()
    cy.findByRole('textbox').type('list one')
    cy.findByRole('button', { name: /submit/i }).click()
    cy.findByRole('tab', { name: /my list/i }).should('not.exist')
    cy.findByRole('tab', { name: /list one/i }).should('exist')

    //delete list
    cy.findByRole('button', { name: /delete list/i }).click()
    cy.get('[data-cy=delete-the-list]').click()
    cy.findByRole('tab', { name: /list one/i }).should('not.exist')
  })
})

describe('nav and lists', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.findByRole('textbox', { name: /email address/i }).type(
      'john@example.com'
    )
    cy.get('#outlined-adornment-password').type('123456')
    cy.findByRole('button', { name: /login/i }).click()

    cy.wait(500)

    // create new list
    cy.findByRole('tab', { name: /\+ new list/i }).click()
    cy.findByRole('textbox').type('list one{enter}')
  })

  afterEach(() => {
    //delete list
    cy.findByRole('button', { name: /delete list/i }).click()
    cy.get('[data-cy=delete-the-list]').click()
    cy.findByRole('button', { name: /logout/i }).click()
  })

  it('user can add tasks, change task title, check a task, uncheck a task, delete a task', () => {
    //add tasks
    cy.findByRole('button', { name: /add task/i }).click()
    cy.get('.MuiOutlinedInput-input').type('task one{enter}')
    cy.get('.MuiOutlinedInput-input').type('task two{enter}')
    cy.findByDisplayValue(/task one/i).should('exist')

    //change task title
    cy.get(
      '[data-cy="task two"] > .MuiFormControl-root > .MuiInput-root > .MuiInput-input'
    )
      .click()
      .type('2')
      .blur()
    cy.get(
      '[data-cy="task two"] > .MuiFormControl-root > .MuiInput-root > .MuiInput-input'
    ).should('have.value', 'task two2')

    //check task
    cy.get(
      '[data-cy="task one"] > .MuiCheckbox-root > .PrivateSwitchBase-input'
    ).check()
    cy.get(
      '[data-cy="task one"] > .MuiFormControl-root > .MuiInput-root > .MuiInput-input'
    ).should('have.attr', 'disabled')

    //uncheck task
    cy.get(
      '[data-cy="task one"] > .MuiCheckbox-root > .PrivateSwitchBase-input'
    ).uncheck()
    cy.get(
      '[data-cy="task one"] > .MuiFormControl-root > .MuiInput-root > .MuiInput-input'
    ).should('not.have.attr', 'disabled')

    //delete task
    cy.get('[data-cy="task one"] > .MuiButton-root').click()
    cy.get(
      '[data-cy="task one"] > .MuiFormControl-root > .MuiInput-root > .MuiInput-input'
    ).should('not.exist')
  })
})

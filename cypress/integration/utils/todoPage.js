Cypress.Commands.add('enterValue', (TODO_ITEM) => {
    cy.get('.new-todo').type(TODO_ITEM)
    cy.get('.new-todo').type('{Enter}')

})
Cypress.Commands.add('assertElementContainsText', (actual_value, expected_value) => {
    expect(actual_value).to.contain.text(expected_value)

})
Cypress.Commands.add('assertElementsInListCount', (actual_value, expected_value) => {
    expect(actual_value).length(expected_value)

})
Cypress.Commands.add('assertIfElementInListIsToggled', (item) => {
    cy.get(item).should('be.checked')

})



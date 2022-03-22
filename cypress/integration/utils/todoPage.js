
// Command to Enter Values in Todo Box
Cypress.Commands.add('enterValue', (TODO_ITEM) => {
    cy.get('.new-todo').type(TODO_ITEM)
    cy.get('.new-todo').type('{Enter}')

})

// Command to assert text 
Cypress.Commands.add('assertElementContainsText', (actual_value, expected_value) => {
    expect(actual_value).to.contain.text(expected_value)

})

// Command to assert list count
Cypress.Commands.add('assertElementsInListCount', (actual_value, expected_value) => {
    expect(actual_value).length(expected_value)

})

// Command to check toggle
Cypress.Commands.add('assertIfElementInListIsToggled', (item) => {
    cy.get(item).should('be.checked')

})



/// <reference types ='cypress' />

import '../integration/utils/todoPage.js'


describe ('CloudTalk Assignment', ()=>{
    beforeEach(function() {
        const testOptions =     
        {
            resolutionX: Cypress.config('resolutionX'),
            resolutionY: Cypress.config('resolutionY'),
        }

        cy.visit(Cypress.config('initialRoute'))
        
    })
    
    let TODO_ITEM_ONE = Cypress.config('TODO_ITEM_ONE')
    let TODO_ITEM_TWO = Cypress.config('TODO_ITEM_TWO')

    it ('Test 1', ()=>{
       
     
        // Enter First Item
        cy.enterValue(TODO_ITEM_ONE)
        // Enter Second Item
        cy.enterValue(TODO_ITEM_TWO)
        

        cy.get('.view > label').then(todoListItem => {

            cy.assertElementContainsText(todoListItem[0], TODO_ITEM_ONE)
            cy.assertElementContainsText(todoListItem[1], TODO_ITEM_TWO)
            cy.assertElementsInListCount(todoListItem, 2)
            

        })
        
    })
    

    it ('Test 2', ()=> {
        cy.enterValue(TODO_ITEM_ONE)
        cy.enterValue(TODO_ITEM_TWO)

        cy.get('.view > .toggle').then(todoListItem =>{
            todoListItem[0].click()
            cy.assertIfElementInListIsToggled(todoListItem[0])
            
        })
        
    })

})
class createCardActions {
    openBoard(boardUrl){
        cy.visit(boardUrl)
        cy.wait(8000)
        return this;
    }

    clickOnAddACardButton(){
        cy.wait(500)
        cy.findByTestId("list-add-card-button").first().click()
        cy.wait(3000)
        return this;
    }


    typeInCardTitleInputField(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        cy.wait(2500)

        return this;
    }


    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button").click()
        cy.wait(2000)

        return this;
    }

}
export default createCardActions;
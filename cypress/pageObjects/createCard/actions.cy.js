class createCardActions {
    openBoard(boardUrl){
        cy.visit(boardUrl)
        return this;
    }

    clickOnAddACardButton(){
        cy.findByTestId("list-add-card-button").first().click()
        return this;
    }


    typeInCardTitleInputField(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        

        return this;
    }


    clickOnAddCardButton(){
        cy.findByTestId("list-card-composer-add-card-button").click()
        cy.wait(1000)

        return this;
    }

}
export default createCardActions;
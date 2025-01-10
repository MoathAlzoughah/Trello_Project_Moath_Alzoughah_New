class createBoardActions {

    clickOnNavbarCreateButton(){
        cy.findByTestId("header-create-menu-button").click();
        cy.wait(4000)
        return this; 
    }

    clickOnCreateBoardOption(){
        cy.findByTestId("header-create-board-button").click();
        cy.wait(2000)
        return this;
    }

    typeInBoardTitleInputField(boardName){
        cy.findByTestId("create-board-title-input").type(boardName)
        cy.wait(1500)
        return this;
    }

    clickOnCreateButton(){
        cy.findByTestId("create-board-submit-button").click();
        cy.wait(8000)
        return this;
    }
}
export default createBoardActions;

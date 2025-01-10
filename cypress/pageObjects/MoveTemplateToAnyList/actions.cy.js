/// <reference types="cypress" />

class MoveTemplateToAnyListActions{

    openBoard(boardUrl){
        cy.visit(boardUrl)
        cy.wait(8000)
        return this;
    }

    
    CreatnewTemplate(){
        cy.findByTestId("card-template-list-button").first().click()
        cy.wait(2000)
        return this;
    }
 

    CreateNewTemplateCardButto(){
        cy.findByTestId("create-new-template-card-button").click()
        cy.wait(1000)
        return this;
    }

   
    CreateTemplateCardCompose(){
        cy.findByTestId("create-template-card-composer").type("My Card").click()
        cy.wait(1000)
        return this;
    }


    NewTemplateCardSubmitButton(){

        cy.findByTestId("new-template-card-submit-button").click()
        cy.wait(8700)
        return this;
    
    }
    

    
    ClickONDownIcone(){
        cy.contains("in list").click("right")
        cy.wait(1000)
        return this;
    }


    ClickOnTheDownArrow(){
        cy.get(".css-17zzl5o").eq(1).click()
        cy.wait(1000)
        return this;
    }

    SelectListbBox(){
       
        cy.get(".css-x50wjx-menu").click()
        cy.wait(1000)
        return this;

    }


    MoveCardPopoverMoveButton(){
       
        cy.findByTestId("move-card-popover-move-button").click()
        cy.wait(1000)
        return this;

    }

    
}

export default MoveTemplateToAnyListActions
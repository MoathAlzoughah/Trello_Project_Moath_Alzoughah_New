class HideTemplateFromListActions{

    openBoard(boardUrl){
        cy.visit(boardUrl)
        cy.wait(4000)
        return this;
    }



    
    CreatnewTemplate(){
        cy.findByTestId("card-template-list-button").first().click()
        cy.wait(1000)
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
        cy.wait(7000)
        return this;
    
    }


    HideFromList(){
        cy.findByTestId("card-back-archive-button").first().click();
        cy.wait(4000)
        return this;
        
    }


    CloseIcont(){
        cy.wait(2000)
        cy.findByTestId("CloseIcon").first().click();
       
        return this;
        
    }


    
}

export default HideTemplateFromListActions
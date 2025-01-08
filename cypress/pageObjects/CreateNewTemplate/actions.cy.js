class CreateNewTemplateActions{
   
   openBoard(boardUrl){
        cy.visit(boardUrl)
        cy.wait(4000)
        return this;
    }



    clickOnTemplateCardIcon(){
        cy.wait(5000)
        cy.findByTestId("TemplateCardIcon").first().click()
        cy.wait(3000)
        return this;
    }
    

    CreateNewTemplateCardButton(){
        cy.findByTestId("create-new-template-card-button").click()
        cy.wait(3000)
        return this;
    }
    

    CreateTemplateCardComposer(){
        cy.findByTestId("create-template-card-composer").type("My New Card Template")
        cy.wait(3000)
        return this;
    }


    NewTemplateCardSubmitButton(){
        cy.findByTestId("new-template-card-submit-button").click()
        cy.wait(3000)
        return this;
    }
    
    



}


export default CreateNewTemplateActions
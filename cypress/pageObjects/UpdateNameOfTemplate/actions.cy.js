class UpdateNameOfTemplateActions{

    openBoard(boardUrl){
        cy.visit(boardUrl)
        cy.wait(4000)
        return this;
    
    }


    CreatnewTemplate(){
        cy.findByTestId("card-template-list-button").first().click()
        cy.wait(2000)
        return this;
    }



    CreateNewTemplateCardButto(){
        cy.findByTestId("create-new-template-card-button").click()
        cy.wait(2500)
        return this;
    }

   
    CreateTemplateCardCompose(){
        cy.findByTestId("create-template-card-composer").type("My Card").click()
        cy.wait(3000)
        return this;
    }

    NewTemplateCardSubmitButton(){

        cy.findByTestId("new-template-card-submit-button").click()
        cy.wait(11000)
        return this;
    
    }

    CardBackTitleInput(){
        cy.findByTestId("card-back-title-input").click().clear().type("Update My Card").click()
        cy.wait(5500)
        cy.findByTestId("CloseIcon").first().click();
        cy.get('button')
        cy.wait(3300)
        return this;
        
    }

}

export default UpdateNameOfTemplateActions
class DeleteACardActions {


    openBoard(boardUrl){
        cy.visit(boardUrl)
        cy.wait(4000)
        return this;
    }



    clickOnAddACardButton(){
        cy.findByTestId("list-footer").first().click()
        cy.wait(4000)
        return this;
    }


    typeInCardTitleInputField(cardName){
        cy.findByTestId("list-card-composer-textarea").type(cardName)
        return this;
       

    }


    clickOnAddCardButton(){
        cy.findByTestId("list-card--add-card-button").click()
        cy.wait(6000)
        return this;

        
    }


    clickOnMycardname(){
        
        cy.findByTestId("card-name").click()
     
         cy.wait(3000)
         
 
         return this;
 
     }

    clickOnAddCardArchive(){
        
       
       
        cy.findByTestId("card-back-archive-button").click()

        cy.wait(3000)
        

        return this;

    }


    clickOndeleteCardArchive(){
        
       

        cy.findByTestId("card-back-delete-card-button").click()

        cy.wait(2000)
        

        return this;
        
    }



    Deletebutton(){
        
       

        cy.findByTestId("popover-confirm-button").click()

        cy.wait(1000)
        

        return this;
        
    }




    



}

export default DeleteACardActions;
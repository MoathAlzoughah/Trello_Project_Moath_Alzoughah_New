/// <reference types="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import DeleteACardActions from "../../../pageObjects/DeleteACard/actions.cy";
import DeleteACardAssertions from "../../../pageObjects/DeleteACard/assertions.cy";

const boardName = "QA-Moath-board"
const cardName = "My card";



let  boardUrl , BoradId;

// let cardId;

const dataUtil = new dataUtils();


const DeleteACardAction = new DeleteACardActions
const DeleteACardAssertion = new DeleteACardAssertions


before(()=>{



    dataUtil.createBoard(boardName)

    .then((response)=>{
  
        cy.log(response.body.url)
            
        boardUrl = response.body.url
        BoradId  = response.body.id
        // cardId = response.body.id;
         
        
        });

       

    cy.loginToTrello()



})


Given("The user navigate to the board",()=>{

   DeleteACardAction.openBoard(boardUrl)


   
})


When("Clicks on Add a card button",()=>{

    DeleteACardAction.clickOnAddACardButton()
   
})

When("Types card name in card title input field",()=>{

DeleteACardAction.typeInCardTitleInputField(cardName)
   
})


When("Clicks on add Card button",()=>{

DeleteACardAction.clickOnAddACardButton()

   
})



Then("The card will be created successfully",()=>{

 
   
    DeleteACardAssertion.checkListIsContainCard(cardName)

    DeleteACardAction.clickOnMycardname()

})

Then("The user Can Delete Existing Card",()=>{

    DeleteACardAction.clickOnAddCardArchive()

    DeleteACardAction.clickOndeleteCardArchive() 

    DeleteACardAction.Deletebutton()

    // dataUtil.deletecard(cardId)



  
    
})


after(()=>{


  
    cy.wait(3000)

    dataUtil.deleteBoard(BoradId)
    
      

    

})













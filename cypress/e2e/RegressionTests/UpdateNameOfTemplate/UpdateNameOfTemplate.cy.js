/// <reference types="cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import UpdateNameOfTemplateActions from "../../../pageObjects/UpdateNameOfTemplate/actions.cy";
import UpdateNameOfTemplateAssertions from "../../../pageObjects/UpdateNameOfTemplate/assertions.cy";



const boardName = "QA-Moath-board"

const dataUtil = new dataUtils();

const UpdateNameOfTemplateAction = new UpdateNameOfTemplateActions
const UpdateNameOfTemplateAssertion = new UpdateNameOfTemplateAssertions


let  boardUrl , BoradId , Update;


before(()=>{

dataUtil.createBoard(boardName).then((response)=>{

    cy.log(response.body.url)
            
        boardUrl = response.body.url
        BoradId  = response.body.id 
    });
    

    cy.loginToTrello()


})



Given("The user navigate to the board",()=>{

    UpdateNameOfTemplateAction.openBoard(boardUrl)

})


When("The user clicks on the template card icon",()=>{

    UpdateNameOfTemplateAction.CreatnewTemplate()
   
})

When("The user clicks the Create New Template Card button",()=>{


    UpdateNameOfTemplateAction.CreateNewTemplateCardButto()
   
})


When("The user fills in the template card composer",()=>{

    UpdateNameOfTemplateAction.CreateTemplateCardCompose()

   
})


When("The user submits the new template card",()=>{

    UpdateNameOfTemplateAction.NewTemplateCardSubmitButton()
   
})


When("The user updates the card title",()=>{

    
UpdateNameOfTemplateAction.CardBackTitleInput()
   
})


Then("The name of the template is updated successfully",()=>{

UpdateNameOfTemplateAssertion.QuickCardEditorCardTitle()

})


after(()=>{

  
    cy.wait(3000)

    dataUtil.deleteBoard(BoradId)
        

})
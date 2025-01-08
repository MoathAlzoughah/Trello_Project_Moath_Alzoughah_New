/// <reference types="cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import CreateNewTemplateActions from "../../../pageObjects/CreateNewTemplate/actions.cy";
import CreateNewTemplateAssertionss from "../../../pageObjects/CreateNewTemplate/assertions.cy";
import CreateNewTemplateAssertions from "../../../pageObjects/CreateNewTemplate/assertions.cy";



const boardName = "QA-Moath-board"

const dataUtil = new dataUtils();

const CreateNewTemplateAction = new CreateNewTemplateActions
const CreateNewTemplateAssertion = new CreateNewTemplateAssertions

let  boardUrl , BoradId;


before(()=>{

dataUtil.createBoard(boardName).then((response)=>{

    cy.log(response.body.url)
            
        boardUrl = response.body.url
        BoradId  = response.body.id

              });
       

    cy.loginToTrello()



})



Given("The user navigate to the board",()=>{

    CreateNewTemplateAction.openBoard(boardUrl)

})



When("click On Template Card Icon",()=>{

    CreateNewTemplateAction.clickOnTemplateCardIcon()
   
})

When("create new-template card button",()=>{

    CreateNewTemplateAction.CreateNewTemplateCardButton()
   
})


When("create template card composer",()=>{


    CreateNewTemplateAction.CreateTemplateCardComposer()
})


When("new template card submit button",()=>{


    CreateNewTemplateAction.NewTemplateCardSubmitButton()


})

Then("create a new template card successfully",()=>{

    CreateNewTemplateAssertion.ThisIsATemplateCard()
   


})



after(()=>{


  
    cy.wait(3000)

    dataUtil.deleteBoard(BoradId)
    
      

    

})

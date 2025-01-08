/// <reference types="cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import HideTemplateFromListActions from "../../../pageObjects/HideTemplateFromList/actions.cy";
import HideTemplateFromListAssertions from "../../../pageObjects/HideTemplateFromList/assertions.cy";



const boardName = "QA-Moath-board"

const dataUtil = new dataUtils();

const HideTemplateFromListAction = new HideTemplateFromListActions

const HideTemplateFromListAssertion = new HideTemplateFromListAssertions

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

    HideTemplateFromListAction.openBoard(boardUrl)

})


When("The user clicks on the template card icon",()=>{


    HideTemplateFromListAction.CreatnewTemplate()

   
})

When("The user clicks the Create New Template Card button",()=>{

    HideTemplateFromListAction.CreateNewTemplateCardButto()
   
})


When("The user fills in the template card composer",()=>{

    HideTemplateFromListAction.CreateTemplateCardCompose()
   
})



When("The user submits the new template card",()=>{

    HideTemplateFromListAction.NewTemplateCardSubmitButton()
   
})


When("The user clicks on Hide Template From List",()=>{

    HideTemplateFromListAction.HideFromList()
   
})

When("The user clicks Close Icon",()=>{

    HideTemplateFromListAction.CloseIcont()
   
})



Then("Hide Template From List Successfully", () => {
    

    HideTemplateFromListAssertion.verifyTemplateIsHidden()

});



after(()=>{


  
    cy.wait(3000)

    dataUtil.deleteBoard(BoradId)
    
      

    

})

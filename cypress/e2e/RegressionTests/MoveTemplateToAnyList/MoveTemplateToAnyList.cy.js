/// <reference types="cypress" />
import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import MoveTemplateToAnyListActions from "../../../pageObjects/MoveTemplateToAnyList/actions.cy";
import MoveTemplateToAnyListAssertions from "../../../pageObjects/MoveTemplateToAnyList/assertions.cy";



const boardName = "QA-Moath-board"

const dataUtil = new dataUtils();

const MoveTemplateToAnyListAction = new MoveTemplateToAnyListActions
const MoveTemplateToAnyListAssertion = new MoveTemplateToAnyListAssertions


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

    MoveTemplateToAnyListAction.openBoard(boardUrl)

})


When("The user clicks on the template card icon",()=>{

    MoveTemplateToAnyListAction.CreatnewTemplate()
   
})

When("The user clicks the Create New Template Card button",()=>{

    MoveTemplateToAnyListAction.CreateNewTemplateCardButto()
   
})


When("The user submits the new template card",()=>{

    MoveTemplateToAnyListAction.CreateTemplateCardCompose()
   
})


When("The user fills in the template card composer",()=>{

    MoveTemplateToAnyListAction.NewTemplateCardSubmitButton()
   
})



When("The user clicks on the in list icon",()=>{

    MoveTemplateToAnyListAction.ClickONDownIcone()
   
})


When("The user clicks on the in list of the box",()=>{

    MoveTemplateToAnyListAction.ClickOnTheDownArrow()
   
})

When("The user clicks on Doing icon list",()=>{

    MoveTemplateToAnyListAction.SelectListbBox()
   
})


When("The user clicks on move button",()=>{

    MoveTemplateToAnyListAction.MoveCardPopoverMoveButton()
   
})





Then("The Move Template to Any List' action has been successfully moved to the 'Doing' list",()=>{


    MoveTemplateToAnyListAssertion.QuickCardEditorCardTitle()


}) 



after(()=>{


  
    cy.wait(3000)

    dataUtil.deleteBoard(BoradId)
    

})

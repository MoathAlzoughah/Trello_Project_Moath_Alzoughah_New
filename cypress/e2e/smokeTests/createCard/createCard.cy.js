/// <reference types="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../../support/datautils.cy";
import createCardActions from "../../../pageObjects/createCard/actions.cy";
import createCardAssertions from "../../../pageObjects/createCard/assertions.cy";

const boardName = "QA-Moath-board"
const cardName = "My card";


const loginToTrello = loginToTrello

const createCardAction = new createCardActions();

const createCardAssertionsss = new createCardAssertions();



let  boardUrl , BoradId;

const dataUtil = new dataUtils();

before(()=>{
    
    dataUtil.createBoard(boardName)

    .then((response)=>{
  
        cy.log(response.body.url)
            
         boardUrl = response.body.url
         BoradId  = response.body.id
         
         
        
        });

    cy.loginToTrello()

});


Given("The user navigate to the board",()=>{

    createCardAction.openBoard(boardUrl)

   
})

When("Clicks on Add a card button",()=>{

    createCardAction.clickOnAddACardButton();

   
})


When("Types card name in card title input field",()=>{

    createCardAction.typeInCardTitleInputField(cardName)
    
   
})


When("Clicks on add Card button",()=>{


    createCardAction.clickOnAddCardButton()
   
})


Then("The card will be created successfully",()=>{
   

    createCardAssertionsss.checkListIsContainCard(cardName)

})


after(()=>{
cy.wait(5000)
 dataUtil.deleteBoard(BoradId)


})
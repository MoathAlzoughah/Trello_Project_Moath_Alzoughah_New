
import { APIKey, APIToken } from "../support/constance .cy";

class dataUtils {
    
    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard =(BoradId)=>{
     return cy.request("DELETE",`https://api.trello.com/1/boards/${BoradId}?key=${APIKey}&token=${APIToken}`)

    }

    // deletecard = (cardId)=>{

    //  return cy.request("DELETE",`https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`)

    // }

    
  
}

export default dataUtils;
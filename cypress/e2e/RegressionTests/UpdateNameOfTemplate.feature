Feature: User Can Update the name of a template in Trello

 Scenario: The user can update the name of a template in Trello

  Given The user navigate to the board
   When The user clicks on the template card icon
    And The user clicks the Create New Template Card button
    And The user fills in the template card composer
    And The user submits the new template card
    And The user updates the card title
   Then The name of the template is updated successfully
    

        
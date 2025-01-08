Feature: User Can Hide Template From List

 Scenario: User Can Hide Template From List


  Given The user navigate to the board
   When The user clicks on the template card icon
    And The user clicks the Create New Template Card button
    And The user fills in the template card composer
    And The user submits the new template card
    And The user clicks on Hide Template From List
    And The user clicks Close Icon
   Then Hide Template From List Successfully
    

        
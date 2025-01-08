
Feature: Create New Template Card Template

 Scenario: create a new template card on Trello so that I can use it in my board.


  Given The user navigate to the board
   When click On Template Card Icon
    And create new-template card button
    And create template card composer
    And new template card submit button
   Then create a new template card successfully

        
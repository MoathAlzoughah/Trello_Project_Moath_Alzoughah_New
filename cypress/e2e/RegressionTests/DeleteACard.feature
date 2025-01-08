@RegressionTests

Feature: Delete Existing Card in trello website

    Scenario: Validate that the user Can Delete Existing Card
        
        Given The user navigate to the board
        When Clicks on Add a card button
        And Types card name in card title input field
        And Clicks on add Card button
        Then The card will be created successfully
        And The user Can Delete Existing Card

        

        
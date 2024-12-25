@smokeTest
Feature: Create Card in trello website

    Scenario: Validate that the user can create a new Card
        Given The user navigate to the board
        When Clicks on Add a card button
        And Types card name in card title input field
        And Clicks on add Card button
        Then The card will be created successfully
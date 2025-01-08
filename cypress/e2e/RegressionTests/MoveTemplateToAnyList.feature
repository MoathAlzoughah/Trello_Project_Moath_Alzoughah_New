Feature: User Can Move Template To Any List

Scenario:User moves a template card from the 'To Do' list to the 'Doing' list


Given The user navigate to the board
When The user clicks on the template card icon
And The user clicks the Create New Template Card button
And The user submits the new template card
And The user fills in the template card composer
And The user clicks on the in list icon
And The user clicks on the in list of the box
And The user clicks on Doing icon list
And The user clicks on move button
Then The Move Template to Any List' action has been successfully moved to the 'Doing' list

        
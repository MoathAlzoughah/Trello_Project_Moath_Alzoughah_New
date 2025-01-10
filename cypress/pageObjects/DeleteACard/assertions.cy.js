class DeleteACardAssertions {


    checkListIsContainCard(cardName){
        cy.findByTestId("card-name").should("contain",cardName)
        cy.screenshot('Board_FullPage', { capture: 'fullPage' });

        return this;
    }


}

export default DeleteACardAssertions;
class DeleteACardAssertions {


    checkListIsContainCard(cardName){
        cy.findByTestId("card-name").should("contain",cardName)
        return this;
    }


}

export default DeleteACardAssertions;
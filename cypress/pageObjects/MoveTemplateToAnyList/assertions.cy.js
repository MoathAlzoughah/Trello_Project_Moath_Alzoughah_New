class MoveTemplateToAnyListAssertions{


    QuickCardEditorCardTitle(){
        cy.get(".hpM7BapwowXTcC").should("contain","Doing")
        cy.log("The Move Template to Any List' has been successfully moved to the 'Doing' list.")
        return this;
    }
    

}

export default MoveTemplateToAnyListAssertions




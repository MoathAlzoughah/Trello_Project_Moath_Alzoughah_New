class MoveTemplateToAnyListAssertions{


    QuickCardEditorCardTitle(){
        cy.contains("in list").should("contain","Doing")
        cy.log("The Move Template to Any List' has been successfully moved to the 'Doing' list.")
        return this;
    }
    

}

export default MoveTemplateToAnyListAssertions




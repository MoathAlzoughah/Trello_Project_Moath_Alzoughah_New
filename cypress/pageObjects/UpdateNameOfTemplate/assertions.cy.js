class UpdateNameOfTemplateAssertions{


    QuickCardEditorCardTitle(){
        cy.findByTestId("list-wrapper").should("contain","Update My Card")
        return this;
    }
    

}

export default UpdateNameOfTemplateAssertions
class CreateNewTemplateAssertions{


    ThisIsATemplateCard(){
        cy.wait(2000)
        cy.findByTestId("template-card-back-banner").should("contain","This is a Template card.")
        return this;
    }


}

export default CreateNewTemplateAssertions
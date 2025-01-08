class HideTemplateFromListAssertions{


    verifyTemplateIsHidden() {
        cy.get('[data-cy=template-list]').should('not.exist');
        cy.log("Template is Hidden")
    }

    

}

export default HideTemplateFromListAssertions
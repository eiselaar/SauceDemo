Cypress.Commands.add('checkout', (firtsname, lastname, zipcode)=>{
    cy.fixture('checkout').then((check)=>{
        cy.get(check.firtsname).type(firtsname);
        cy.get(check.lastname).type(lastname)
        cy.get(check.zipcode).type(zipcode)
        cy.get(check.btncontinue).click();
    })
})
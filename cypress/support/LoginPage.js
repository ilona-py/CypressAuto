export class LoginPage{
    pageContainEmail(){
        cy.get('[class="form-group"]').contains('Email')
    }
    cancelButton(){
        cy.get('#exitButton').click()
    }

}

export const loginPage = new LoginPage()
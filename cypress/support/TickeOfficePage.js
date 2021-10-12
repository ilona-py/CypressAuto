export class TicketOffice{
    selectOutward(){
        cy.get('[name="GO"][value="1"]').click().check({force:true}).should('be.checked')
    }
    selectInward(){
        cy.get('[name="BACK"][value="1"]').click().check({force:true}).should('be.checked')
    }
    checkboxAgreement(){
        cy.get('[type="checkbox"][name="travelTerms"]').check({force:true}).should('be.checked')
    }
    selectContinue(){
        cy.get('#buttonNext').click()
    }
    correctPageCheck(){
        cy.get('[class="carousel-caption clearfix"]').contains('Online Tickets')
    }
}

export const ticketOffice = new TicketOffice
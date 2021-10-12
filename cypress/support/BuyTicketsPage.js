export class BuyTicketsPage{
    getInputFrom(type){
        cy.get('[accesskey="2"][title="From "]').click().type(type)
    }

    getInputArrive(type){
        cy.get('#arrival-date').click().type(type)
    }
    set1Class(){
        cy.get('#option1Label').click()
    }
    clickPassengersDropdown(){
        cy.get('[class="btn dropdown-toggle selectpicker btn-default"]').click()
    }
    selectAmountOfPassengers(passengers){
        cy.get('[class="dropdown-menu inner selectpicker"]').contains(passengers).click()
    }
    submmitButton(){
        cy.get('[type="submit"][value="Submit »"]').click()
    }
    correctPageCheck(){
        cy.get('[class="carousel-caption clearfix"]').contains('Online Tickets')
    }
}

export const buyTickets = new BuyTicketsPage()
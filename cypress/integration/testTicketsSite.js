/// <reference types="Cypress" />

import { buyTickets } from '../support/BuyTicketsPage';
import { onDatePicker } from '../support/DatePickerFunction';
import { loginPage } from '../support/LoginPage';
import { ticketOffice } from '../support/TickeOfficePage';

describe('Test for the site: https://www.cp.pt/passageiros/en/buy-tickets', ()=> {
    it('Navigate to the site and choose dates', () => {
        cy.visit('/')
        onDatePicker.getDatePicker().click()
        onDatePicker.chooseDayOfMonth(3, '[class="picker__nav--next"][aria-controls="datepicker-first_table"]',
        '#datepicker-first_table')
        onDatePicker.getDatePicker2().click()
        onDatePicker.chooseDayOfMonth(6, '[class="picker__nav--next"][aria-controls="datepicker-second_table"]',
        '#datepicker-second_table')
    })
    it('Choose parameters from online tickets page', () => {
        buyTickets.getInputFrom('Lagos')
        buyTickets.getInputArrive('Porto - Campanha')
        buyTickets.set1Class()
        buyTickets.clickPassengersDropdown()
        buyTickets.selectAmountOfPassengers('3 Passengers')
        buyTickets.submmitButton()
    })
    it('Choose parameters at tickets page and continue', () => {
        ticketOffice.selectOutward()
        ticketOffice.selectInward()
        ticketOffice.checkboxAgreement()
        ticketOffice.selectContinue()
    })
    it('Check login page is appeared and press cancel', () => {
        loginPage.pageContainEmail()
        loginPage.cancelButton()
     })
    it('Validate search options', () => {
        buyTickets.correctPageCheck()
    })
})


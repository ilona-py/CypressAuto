export class DatePicker{
    chooseDayOfMonth(addDay, nextMonth, pickDay){
        let date = new Date()
        date.setDate(date.getDate() +addDay)
        let futureDate = date.getDate()
        let futureMonth = date.toLocaleString('default', {month: 'long'})
        cy.get('[class="picker__month"]').then(($el) => {
            const text = $el.text()
            if (!text.includes(futureMonth) ){
                cy.get(nextMonth).click()
                cy.get(pickDay).contains(futureDate).click()
            }else{
                cy.get(pickDay).contains(futureDate).click()
            }
        
        })
    }
    getDatePicker(){
        return cy.get('input#datepicker-first')
    }
    getDatePicker2(){
        return cy.get('input#datepicker-second')
    }

}
export const onDatePicker = new DatePicker()

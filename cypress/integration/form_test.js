describe('Form test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=customerName]')
    const sizeSelection = () => cy.get('select[name=size]')
    const sauceCheck = () => cy.get('input[type="radio"]')
    const topping1 = () => cy.get('input[name=pepperoni]')
    const topping2 = () => cy.get('input[name=tomatos]')
    const topping3 = () => cy.get('input[name=sausage')
    const topping4 = () => cy.get('input[name=bacon]')
    const submitBtn = () => cy.get('button[id="order-button"]')

    it('test that you can add text to the box', () => {
        nameInput()
            .type('Amy')
            .should('have.value', 'Amy')

    })

    it('test that you can select multiple toppings', () => {
        topping1()
            .check()
        topping2()
            .check()
        topping3()
            .check()
        topping4()
            .check()
    })

    it('test that you can submit the form', () => {
        nameInput()
            .type('Amy')
        sizeSelection()
            .select('6" Mini')
        sauceCheck()
            .check('classic')
        topping1()
            .check()
        topping2()
            .check()
        topping3()
            .check()
        topping4()
            .check()
        submitBtn()
            .click()
    })
})
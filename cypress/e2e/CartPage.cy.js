describe('CartPage', () => {
    it('display empty cart message when no items added', () => {
        cy.visit('/cart')
        cy.contains('Your cart is empty')
        cy.contains('a', 'Browse games')
            .should('have.attr', 'href', '/')
    })
})
describe('Homepage', () => {
    it('loads and displays hero section', () => {
        cy.visit('/')
        cy.contains('GameShop')
    })
})
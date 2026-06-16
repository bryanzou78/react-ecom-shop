describe('Homepage', () => {
    it('displays GameShop heading', () => {
        cy.visit('/')
        cy.contains('Welcome to GameShop')
    })

    it('displays all categories with links to shop paths', () => {
        cy.visit('/')
        cy.contains('a', 'Action')
            .should('have.attr', 'href', '/category/action')
        cy.contains('a', 'RPG')
            .should('have.attr', 'href', '/category/rpg')
        cy.contains('a', 'Shooter')
            .should('have.attr', 'href', '/category/shooter')
        cy.contains('a', 'Strategy')
            .should('have.attr', 'href', '/category/strategy')
    })

    it('displays header with GameShop and Cart links ', () => {
        cy.visit('/')
        cy.contains('a', 'GameShop')
            .should('have.attr', 'href', '/')
        cy.contains('a', 'Cart')
            .should('have.attr', 'href', '/cart')
    })
})
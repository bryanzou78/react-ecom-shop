describe('CategoryPage', () => {
    it('loads and displays games for the action category', () => {
        cy.intercept('GET', '**/games/*', { fixture: 'games.json' }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.contains('Hades')
    })

    it('display Add to Cart button', () => {
        cy.intercept('GET', '**/games/*', { fixture: 'games.json' }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.contains('button', 'Add to Cart')
    })

    it('displays 12 product cards', () => {
        cy.intercept('GET', '**/games/*', { fixture: 'games.json' }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.get('.product-card')
            .should('have.length', 12)
    })
})
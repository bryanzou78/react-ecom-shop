describe('CategoryPage', () => {
    it('loads and displays games for the action category', () => {
        cy.intercept('GET', '**/games/*', { fixture: 'games.json'}).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
    })
})
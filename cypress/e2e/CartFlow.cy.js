describe('AddToCartFlow', () => {
    it('navigates from category page to cart and shows correct total after adding an item', () => {
        cy.visit('/')
        cy.intercept('GET', '**/games/*', { fixture: 'games.json' }).as('getGames')
        cy.contains('a', 'Action').click()
        cy.wait('@getGames')
        cy.location('pathname')
            .should('eq', '/category/action')
        cy.get('.product-card').first().find('.add-to-cart-btn').click()
        cy.contains('a', 'Cart').click()
        cy.location('pathname')
            .should('eq', '/cart')
        cy.contains('Hades')
        cy.contains('.cart-total', 'Total: $39.99')
    })

    it('adding multiple of same item increments quantity and shows correct total', () => {
        cy.intercept('GET', '**/games/*', { fixture: 'games.json' }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.get('.product-card').first().find('.add-to-cart-btn').click()
        cy.get('.product-card').first().find('.add-to-cart-btn').click()
        cy.contains('a', 'Cart').click()
        cy.contains('Hades')
        cy.contains('Qty: 2')
        cy.contains('.cart-total', 'Total: $79.98')
    })

    it('adding two different products both in cart with correct total', () => {
        cy.intercept('GET', '**/games/*', (req) => {
            if(req.url.includes('/games/3498')) {
                req.reply({ fixture: 'games.json' })
            } else {
                req.reply({ fixture: 'gameAlt.json' })
            }
        }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.get('.product-card').eq(0).find('.add-to-cart-btn').click()
        cy.get('.product-card').eq(1).find('.add-to-cart-btn').click()
        cy.contains('a', 'Cart').click()
        cy.contains('.cart-item', 'Hades').find('img')
            .should('have.attr', 'src', 'https://example.com/hades.jpg')
        cy.contains('.cart-item', 'Hollow Knight').find('img')
            .should('have.attr', 'src', 'https://example.com/hollow-knight.jpg')
        cy.contains('.cart-total', 'Total: $59.98')
    })

    it('removing cart item works and shows empty message', () => {
        cy.intercept('GET', '**/games/*', { fixture: 'games.json' }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.get('.product-card').first().find('.add-to-cart-btn').click()
        cy.contains('a', 'Cart').click()
        cy.contains('.cart-item', 'Hades').find('img')
            .should('have.attr', 'src', 'https://example.com/hades.jpg')
        cy.get('.cart-item').first().contains('button', 'Remove').click()
        cy.contains('Your cart is empty')
    })

    it('removing one of multiple items works correctly', () => {
        cy.intercept('GET', '**/games/*', (req) => {
            if(req.url.includes('/games/3498')) {
                req.reply({ fixture: 'games.json' })
            } else {
                req.reply({ fixture: 'gameAlt.json' })
            }
        }).as('getGames')
        cy.visit('/category/action')
        cy.wait('@getGames')
        cy.get('.product-card').eq(0).find('.add-to-cart-btn').click()
        cy.get('.product-card').eq(1).find('.add-to-cart-btn').click()
        cy.contains('a', 'Cart').click()
        cy.contains('.cart-item', 'Hades').find('img')
            .should('have.attr', 'src', 'https://example.com/hades.jpg')
        cy.contains('.cart-item', 'Hollow Knight').find('img')
            .should('have.attr', 'src', 'https://example.com/hollow-knight.jpg')
        cy.contains('.cart-total', 'Total: $59.98')
        cy.get('.cart-item').first().contains('button', 'Remove').click()
        cy.contains('.cart-item', 'Hades').should('not.exist')
        cy.contains('.cart-total', 'Total: $19.99')
    })
})
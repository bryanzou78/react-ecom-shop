import { render, screen } from '@testing-library/react'
import { CartContext } from '../context/CartContext'
import CartPage from '../pages/CartPage'
import { MemoryRouter } from 'react-router-dom'

const mockCartItem = {
    id: 1,
    name: 'Hades',
    background_image: 'https://example.com/hades.jpg',
    price: 29.99,
    quantity: 1,
}

const renderWithItems = () => {
    render(
        <MemoryRouter>
            <CartContext.Provider value={{ cartItems: [mockCartItem], removeFromCart: jest.fn(), getCartTotal: () => 29.99 }}>
                <CartPage />
            </CartContext.Provider>
        </MemoryRouter>
    )
}

const renderWithoutItems = () => {
    render(
        <MemoryRouter>
            <CartContext.Provider value={{ cartItems: [], removeFromCart: jest.fn(), getCartTotal: () => 0 }}>
                <CartPage />
            </CartContext.Provider>
        </MemoryRouter>
    )
}

describe('CartPage', () => {
    it('renders empty state message when cart is empty', () => {
        renderWithoutItems()
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
    })

    it('renders a cart item when something is in cart', () => {
        renderWithItems()
        expect(screen.getByText('Hades')).toBeInTheDocument()
    })

    it('renders the correct cart total', () => {
        renderWithItems()
        expect(screen.getByText('$29.99')).toBeInTheDocument()
    })
})
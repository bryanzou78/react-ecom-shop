import { render, screen, fireEvent} from '@testing-library/react'
import { CartProvider } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const mockGame = {
    id: 1,
    name: 'Hades',
    background_image: 'https://example.com/hades.jpg',
    rating: 4.7,
    metacritic: 93,
    released: '2020-09-17'
}

describe('ProductCard', () => {
    it('renders the game name', () => {
        render(
            <CartProvider>
                <ProductCard game={mockGame} price={29.99} />
            </CartProvider>
        )
        expect(screen.getByText('Hades')).toBeInTheDocument()
    })

    it('renders the price', () => {
        render(
            <CartProvider>
                <ProductCard game={mockGame} price={29.99} />
            </CartProvider>
        )
        expect(screen.getByText('$29.99')).toBeInTheDocument()
    })

    it('renders the Add to Cart button', () => {
        render(
            <CartProvider>
                <ProductCard game={mockGame} price={29.99} />
            </CartProvider>
        )
        expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument()
    })

    it('shows Added! after clicking the button', () => {
        render(
            <CartProvider>
                <ProductCard game={mockGame} price={29.99} />
            </CartProvider>
        )
        fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }))
        expect(screen.getByText('Added!')).toBeInTheDocument()
    })
})

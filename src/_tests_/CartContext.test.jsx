import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart} from '../context/CartContext'

const mockCartItem = {
    id: 1,
    price: 29.99,
}

describe('CartContext', () => {
    it('adds item to cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper: CartProvider })

        act(() => {
            result.current.addToCart(mockCartItem, 29.99)
        })

        expect(result.current.cartItems[0]).toMatchObject({ id: 1, price: 29.99 })
    })

    it('removes item from cart', () => {
        const { result } = renderHook(() => useCart(), { wrapper: CartProvider })

        act(() => {
            result.current.addToCart(mockCartItem, 29.99)
        })

        act(() => {
            result.current.removeFromCart(mockCartItem.id)
        })

        expect(result.current.cartItems).toHaveLength(0)
    })

    it('shows correct cart total', () => {
        const { result } = renderHook(() => useCart(), { wrapper: CartProvider })

        act(() => {
            result.current.addToCart(mockCartItem, 29.99)
        })

        expect(result.current.getCartTotal()).toBe(29.99)
    })

    it('adding same item increments quantity', () => {
        const { result } = renderHook(() => useCart(), { wrapper: CartProvider })

        act(() => {
            result.current.addToCart(mockCartItem, 29.99)
        })

        act(() => {
            result.current.addToCart(mockCartItem, 29.99)
        })

        expect(result.current.cartItems[0].quantity).toBe(2)
        expect(result.current.cartItems).toHaveLength(1)
    })
})
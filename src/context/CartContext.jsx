import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    
    const addToCart = (game, price) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === game.id)
            if (existing) {
                return prev.map(item => 
                    item.id === game.id 
                        ? {...item, quantity: item.quantity + 1} 
                        : item)
            }
            return [...prev, { ...game, price, quantity: 1}]
        })
    }

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
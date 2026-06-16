import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const { cartItems, removeFromCart, getCartTotal} = useCart()

    if (cartItems.length === 0) {
        return (
            <div className='empty-cart-message'>
                <p>Your cart is empty</p>
                <Link to='/'>Browse games</Link>
            </div>
        )
    }

    return (
          <div className='cart-page'>
            <h2>Your cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id} className='cart-item'>
                        <img src={item.background_image} alt={item.name} />
                        <div className='cart-item-info'>
                            <p>{item.name}</p>
                            <p>Qty: {item.quantity}</p>
                        </div>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p className='cart-total'>Total: ${getCartTotal().toFixed(2)}</p>
          </div>
    )
}

export default CartPage
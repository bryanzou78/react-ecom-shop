import { useState } from 'react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ game , price}) => {
    const { addToCart } = useCart()
    const [added, setAdded] = useState(false)

    const handleAddToCart = () => {
        addToCart(game, price)
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
    }

    return (
        <div className='product-card'>
            <img src={game.background_image} alt={game.name} />
            <div className='product-card-info'>
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                <p>Metacritic: {game.metacritic}</p>
                <p>Release Date: {game.released}</p>
                <p>${price}</p>
                <button onClick={handleAddToCart} className='add-to-cart-btn'>
                    {added ? 'Added!' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}

export default ProductCard
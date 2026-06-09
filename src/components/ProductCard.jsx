import { useCart } from '../context/CartContext'

const ProductCard = ({ game , price}) => {
    const { addToCart } = useCart()

    return (
        <div className='product-card'>
            <img src={game.background_image} alt={game.name} />
            <div className='product-card-info'>
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                <p>Metacritic: {game.metacritic}</p>
                <p>Release Date: {game.released}</p>
                <p>${price}</p>
                <button onClick={() => addToCart(game, price)} className='add-to-cart-btn'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
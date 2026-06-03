const ProductCard = ({ game , price}) => {
    return (
        <div className='product-card'>
            <img src={game.background_image} alt={game.name} />
            <div className='product-card-info'>
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                <p>Metacritic: {game.metacritic}</p>
                <p>Release Date: {game.released}</p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default ProductCard
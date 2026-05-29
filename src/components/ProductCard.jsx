const ProductCard = ({ game }) => {
    return (
        <div>
            <img src={game.background_image} alt={game.name} />
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
            <p>Metacritic: {game.metacritic}</p>
            <p>Release Date: {game.released}</p>
        </div>
    )
}

export default ProductCard
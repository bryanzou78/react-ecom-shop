import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getGamesByGenre } from '../api/rawg'
import ProductCard from '../components/ProductCard'

const CategoryPage = () => {
    const { genre } = useParams()
    
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                setLoading(true)
                const results = await getGamesByGenre(genre)
                setGames(results)
            } catch(err) {
                setError('Failed to load games')
            } finally {
                setLoading(false)
            }
        }
        fetchGames()
    }, [genre])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{ error }</div>

    return (
        <div className='category-page'>
            <h1 style={{ textTransform: 'capitalize'}}>{genre} Games</h1>
            <div className='product-grid'>
                {games.map(game => (
                    <ProductCard
                        key={game.id}
                        game={game}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage

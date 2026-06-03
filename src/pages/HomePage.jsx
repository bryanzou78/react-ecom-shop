import { Link } from 'react-router-dom'

const genres = [
    { name: 'Action', slug: 'action', description: 'Fast-paced games with intense combat' },
    { name: 'RPG', slug: 'rpg', description: 'Deep stories and character progression' },
    { name: 'Shooter', slug: 'shooter', description: 'First and third person shooters' },
    { name: 'Strategy', slug: 'strategy', description: 'Think your way to victory' },
]

const Homepage = () => {
    return (
        <div className='home-page'>
            <section className='hero'>
                <h1>Welcome to GameShop</h1>
                <p>Browse our curated collection of the best games across each genre</p>
            </section>

            <section className='genre-grid'>
                <h2>Shop by Genre</h2>
                <div className='genre-cards'>
                    {genres.map(genre => (
                        <Link to={`/category/${genre.slug}`} key={genre.slug} className='genre-card'>
                            <h3>{genre.name}</h3>
                            <p>{genre.description}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Homepage


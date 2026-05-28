const API_KEY = import.meta.env.VITE_RAWG_API_KEY
const BASE_URL = 'https://api.rawg.io/api'

export async function getGamesByGenre(genre) {
    try {
        const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&genres=${genre}&page_size=12`)
        const data = await response.json()
        return data.results
    } catch(error) {
        console.error('Error fetching games:', error)
        return []
    }
}

import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    let { genre } = useParams()
    return (
        <div>
            {genre}
        </div>
    )
}

export default CategoryPage

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>GameShop</Link>
            <nav>
                <Link to='/cart' className='header-cart-link'>Cart</Link>
            </nav>
        </header>
    )
}

export default Header
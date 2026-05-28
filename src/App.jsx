import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/category/:genre',
    element : <CategoryPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App

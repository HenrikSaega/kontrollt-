import logo from '../assets/logo.jpg'
import { CartContext } from '../store/CartContext'
import react, { useContext } from 'react'

const Header = () => {
    const { cartItems } = useContext(CartContext);

    const totalItems = cartItems.reduce((acc, item) => {
        return acc + (item.amount || 0);
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button className="text-button">Cart({totalItems})</button>
            </nav>
        </header>
    )
}

export default Header
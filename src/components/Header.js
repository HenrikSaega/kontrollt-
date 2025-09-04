import logo from '../assets/logo.jpg'
import { CartContext } from '../store/CartContext'
import React, { useContext } from 'react'
import Modal from './UI/Modal'

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const [showCart, setShowCart] = React.useState(false);

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
                <button className="text-button" onClick={() => setShowCart(true)}>Cart({totalItems})</button>
                {showCart && <Modal onClose={() => setShowCart(false)} />}
            </nav>
        </header>
    )
}

export default Header
import logo from '../assets/logo.jpg'

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <button className="text-button">Cart (0)</button>
            </nav>
        </header>
    )
}

export default Header
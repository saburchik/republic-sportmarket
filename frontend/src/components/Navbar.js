import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './republic.png';

const Navbar = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img className="navbar__logo" src={logo} alt="Republic-logo" />
                        </Link>
                    </div>

                    <ul className="search">
                        <li>
                            <form>
                                <input className="search__input" placeholder="Поиск" />
                                <button className="search__btn"><i className="fas fa-search"></i></button>
                            </form>
                        </li>
                        <li>
                            <Link className="navbar__helped" to="/">
                                Помощь
                    </Link>
                        </li>
                    </ul>

                    <ul className="navbar__links">
                        <li>
                            <Link className="cart__link" to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                                <span className="cartlogo__badge">0</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="cart__link" to="/">
                                Вход
                    </Link>
                        </li>
                    </ul>

                    <div className="hamburger__menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
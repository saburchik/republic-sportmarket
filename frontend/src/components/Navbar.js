import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './republic.png';

const Navbar = ({ click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img className="navbar__logo logotype" src={logo} alt="Republic-logo" />
                        </Link>
                    </div>

                    <ul className="search">
                        <li>
                            <form>
                                <input className="input" placeholder="Поиск" />
                                <button className="input__btn search__btn"><i className="fas fa-search"></i></button>
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
                                <span className="cartlogo__badge">{getCartCount()}</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="cart__link" to="/">
                                Вход
                    </Link>
                        </li>
                    </ul>

                    <div className="hamburger__menu" onClick={click}>
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
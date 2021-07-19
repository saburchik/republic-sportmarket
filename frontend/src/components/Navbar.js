import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './republic.png';

const Navbar = ({ click }) => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            <div className="navbar__inner">
                <div className="logo">
                    <Link to="/">
                        <img className="navbar__logo" src={logo} alt="Republic-logo" />
                    </Link>
                </div>
                <ul className="search__form">
                    <li>
                        <form>
                            <input className="input search__input" placeholder="Поиск" />
                            <button className="input__btn search__btn"><i className="fas fa-search"></i></button>
                        </form>
                    </li>
                    <li>
                        <Link className="navbar__help" to="/">
                            Помощь
                        </Link>
                    </li>
                </ul>

                <ul className="navbar__links">
                    <li>
                        <Link className="cart__link" to="/cart">
                            <i className="badge fas fa-shopping-cart">
                                <span className="cartlogo__badge">{getCartCount()}</span>
                            </i>
                        </Link>
                    </li>
                    <li>
                        <Link className="cart__link" to="/login">
                            Вход
                        </Link>
                    </li>
                </ul>

                <div className="hamburger__menu" onClick={click} id="menuToggle">
                    <input type="checkbox" />
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
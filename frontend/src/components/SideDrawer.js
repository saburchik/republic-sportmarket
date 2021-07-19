import "./SideDrawer.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './republic.png';

const SideDrawer = ({ show, click }) => {

    const sideDrawerClass = ["sidedrawer"]

    if (show) {
        sideDrawerClass.push("show")
    }

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links">
            <li className="navbar__logo">
                {/* <Link to="/" onClick={click}>
                    <img className="logotype" src={logo} alt="Republic-logo" />
                </Link> */}
                <Link to="/">
                    <img className="navbar__logo logotype" src={logo} alt="Republic-logo" />
                </Link>
            </li>
            <li>
                <Link className="cart__link word" to="/cart" onClick={click}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cartlogo__badge">{getCartCount()}</span>
                </Link>
            </li>
        </ul>

        <ul className="search--mobile">
            <li>
                <Link className="cart__link" to="/" onClick={click}>
                    Вход
                </Link>
            </li>
            <li>
                <Link className="navbar__helped" to="/">
                    Помощь
                </Link>
            </li>
            <li>
                <form>
                    <input className="input search__input" placeholder="Поиск" />
                    <button className="input__btn search__btn"><i className="fas fa-search"></i></button>
                </form>
            </li>
        </ul>
    </div>
}

export default SideDrawer
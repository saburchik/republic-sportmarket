import "./SideDrawer.css";
import { Link } from 'react-router-dom';
import logo from './republic.png';

const SideDrawer = ({ show, click }) => {

    const sideDrawerClass = ["sidedrawer"];

    if (show) {
        sideDrawerClass.push("show");
    }

    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links">
            <li className="navbar__logo">
                <Link to="/" onClick={click}>
                    <img src={logo} alt="Republic-logo" />
                </Link>
            </li>
            <li>
                <Link className="cart__link word" to="/cart" onClick={click}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cartlogo__badge">0</span>
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
    </div>;
};

export default SideDrawer;
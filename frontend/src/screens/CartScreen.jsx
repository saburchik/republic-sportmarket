import './styles/CartScreen.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


// Components
import Advantages from '../components/Advantages';
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
    };

    const getCartSales = () => {
        return cartItems.reduce((oldPrice, item) => item.oldPrice * item.qty + oldPrice, 0);
    };

    const getSales = () => {
        return cartItems.reduce(() => getCartSales() - getCartSubTotal(), 0);
    };

    return (
        <div className="cartscreen">
            <Advantages />
            <div className="container">
                <h3 className="title title__size_m cartscreen__title">В вашей корзине:</h3>
                <div className="order">
                    <div className="order__left">
                        {cartItems.length === 0 ? (
                            <div className="cart__empty">
                                <p>Ваша корзина -
                                    <b> пуста</b>
                                </p>
                                <p>Здесь хранятся товары, которые вы добавили в корзину. Сейчас ваша корзина пуста</p>
                                <Link className="link__assortment" to="/">Перейти к ассортименту</Link>
                            </div>
                        ) : cartItems.map(item => (
                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeHandler}
                            />
                        ))}
                    </div>
                    <div className="order__right">
                        <p className="title__order">Ваш заказ</p>
                        <p className="title__qty">Цена за {getCartCount()} товар(а):<span>{getCartSales().toFixed(2)} ₽</span></p>
                        <p className="title__sales">Скидка на товар(ы): <span>-{getSales()} ₽</span></p>
                        <strong className="title__total">
                            Итого: <span>{getCartSubTotal().toFixed(2)} ₽</span>
                        </strong>
                        <button className="btn order__btn">Оформить заказ</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default CartScreen
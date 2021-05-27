import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Advantages from '../components/Advantages';
import CartItem from '../components/CartItem';

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

    return (
        <div className="cartscreen">
            <div className="container">
                <Advantages />
                <div className="cartscreen__inner">
                    <h3 className="title title__size_m">В вашей корзине:</h3>
                    <div className="order">
                        {cartItems.length === 0 ? (
                            <div>
                                Ваша корзина пуста <Link to="/">Вернутся обратно</Link>
                            </div>
                        ) : cartItems.map(item => (
                            <CartItem
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeHandler}
                            />
                        ))}

                        <div className="order__right">
                            <p className="title">Стоимость заказа</p>
                            <p className="title__text">Цена за 1 товар:<span>3890 Р</span></p>
                            <p className="title__text">Скидка общая:<span>-990 Р</span></p>
                            <strong className="title__text">
                                Итого (Кол-во: {getCartCount()}) <span>{getCartSubTotal().toFixed(2)} Р</span>
                            </strong>
                            <button className="btn order__btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartScreen
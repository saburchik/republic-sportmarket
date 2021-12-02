// == Base:
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
// == Actions:
import { addToCart, removeFromCart } from "../../redux/actions/cartActions"
// == Styles:
import style from "./CartScreen.module.scss"
// == Components:
import Advantages from "../../components/Advantages"
import CartItem from "../../components/CartItem"

const CartScreen = () => {
    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => { window.scrollTo(0, 0) }, [pathname])
        return null
    }
    ScrollToTop()

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    }

    return (
        <section>
            <Advantages />
            <h3 className={style.title}>В вашей корзине:</h3>
            <div className={style.inner}>
                <div className={style.order}>
                    {cartItems.length === 0 ? (
                        <div className={style.cart__empty}>
                            <p>Ваша корзина -
                                <b> пуста</b>
                            </p>
                            <p>Здесь хранятся товары, которые вы добавили в корзину. Сейчас ваша корзина пуста</p>
                            <Link className={style.link} to="/">Перейти к ассортименту</Link>
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
                <aside className={style.products}>
                    <p className={style.title__order}>Ваш заказ</p>
                    <p className={style.title__qty}>Цена за {getCartCount()} товар(а):<span>{getCartSubTotal().toFixed(2)} ₽</span></p>
                    <strong className={style.title__total}>
                        Итого: <span>{getCartSubTotal().toFixed(2)} ₽</span>
                    </strong>
                    <button className={style.btn}>Оформить заказ</button>
                </aside>
            </div>
        </section>
    )
}

export default CartScreen
// == Base:
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
// == Actions:
import { addToCart, removeFromCart } from "../../redux/actions/cartActions"
// == Styles:
import s from "./CartScreen.module.scss"
// == Components:
import Advantages from "../../components/Advantages"
import Title from "../../UI/Title"
import CartItem from "../../components/CartItem"
import Order from "./Order/Order"


const CartScreen = () => {
    // == Scroll to up when switching to CartScreen:
    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => { window.scrollTo(0, 0) }, [pathname])
        return null
    }
    ScrollToTop()

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    // == Changing the number of items:
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    // == Removing items from the cart:
    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <section>
            <Advantages />
            <article className={s.cartscreen}>
                <Title title="В вашей корзине:" />
                <div className={s.inner}>
                    <ul className={s.commodity}>
                        {cartItems.length === 0 ? (
                            <li className={s.ifEmpty}>
                                <p>
                                    <strong>Ваша корзина - пуста!</strong>
                                    <br />
                                    <br />
                                    Здесь хранятся товары, которые вы добавили в корзину. Сейчас ваша корзина пуста.
                                </p>
                                <Link className={s.link} to="/">Перейти к ассортименту</Link>
                            </li>
                        ) : cartItems.map(item => (
                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeHandler}
                            />
                        ))}
                    </ul>
                    <Order />
                </div>
            </article>
        </section>
    )
}

export default CartScreen
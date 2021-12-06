// == Base:
import React from "react"
import { useSelector } from "react-redux"
// == Styles:
import s from './Order.module.scss'

const Order = () => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
    }

    const alertUser = () => {
        alert('В разработке')
    }

    return (
        <aside className={s.order}>
            <h4 className={s.title}>Ваш заказ:</h4>
            <p className={s.subtitle}>
                Цена за {getCartCount()} товар(а):<span>{getCartSubTotal().toFixed(2)} ₽</span>
            </p>
            <strong className={s.subtitle}>
                Итого:<span>{getCartSubTotal().toFixed(2)} ₽</span>
            </strong>
            <div className={s.wrapper}>
                <button className={s.btn} onClick={alertUser}>Оформить заказ</button>
            </div>
        </aside>
    )
}

export default Order

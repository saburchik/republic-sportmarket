// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import s from "./styles/CartItem.module.scss"

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <section className={s.inner}>
            <button className={s.btn__rm} onClick={() => removeHandler(item.product)} href>
                <svg viewBox="0 0 62 62">
                    <path d="M33.83 31l9.9 9.9-2.83 2.83-9.9-9.9-9.9 9.9-2.83-2.83 9.9-9.9-9.9-9.9 2.83-2.83 9.9 9.9 9.9-9.9 2.83 2.83-9.9 9.9z" />
                </svg>
            </button>

            <Link className={s.link} to={`/product/${item.product}`}>
                <img className={s.img} src={item.imageUrl} alt={item.name} />
            </Link>
            <div className={s.wrapper}>
                <h6 className={s.title}>Артикул: <strong>{item.article}</strong></h6>
                <h4 className={s.title}><span>{item.name}</span></h4>
            </div>
            <div className={s.wrapper}>
                <div className={s.quantity}>
                    <h4 className={s.title}>Количество:</h4>
                    <select className={s.select} value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={s.wrapper}>
                <h4 className={s.title}>Цена:</h4>
                <p className={s.price}>{item.price}₽</p>
            </div>
        </section>
    )
}

export default CartItem
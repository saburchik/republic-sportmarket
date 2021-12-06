// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import s from "./styles/CartItem.module.scss"

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    let backPath = `/product/${item.product}`

    return (
        <li className={s.inner}>
            {/* == Btn have position: absolute; */}
            <button className={s.btn__rm} onClick={() => removeHandler(item.product)}>
                <svg viewBox="0 0 62 62">
                    <path d="M33.83 31l9.9 9.9-2.83 2.83-9.9-9.9-9.9 9.9-2.83-2.83 9.9-9.9-9.9-9.9 2.83-2.83 9.9 9.9 9.9-9.9 2.83 2.83-9.9 9.9z" />
                </svg>
            </button>

            <Link className={s.photo} to={backPath}>
                <img src={item.imageUrl} alt={item.name} />
            </Link>
            <div className={s.item}>
                <h6 className={s.subtitle}>Артикул: <strong>{item.article}</strong></h6>
                <strong className={s.title}><span>{item.name}</span></strong>
            </div>
            <div className={s.item}>
                <div className={s.wrapper}>
                    <h4 className={s.title}>Количество:</h4>
                    <select className={s.select} value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={s.item}>
                <h4 className={s.title}>Цена:</h4>
                <p className={s.price}>{item.price} ₽</p>
            </div>
        </li>
    )
}

export default CartItem
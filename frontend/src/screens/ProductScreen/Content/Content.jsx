// == Base:
import { React, useState } from "react"
import { useDispatch } from "react-redux"
// == Actions: 
import { addToCart } from "../../../redux/actions/cartActions"
// == Styles:
import s from "./Content.module.scss"

const Content = (props) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addToCart(props.product._id, qty))
        props.history.push('/cart')
    }

    let isDisabled = false
    const displayBtn = () => {
        if (props.product.countInStock === 0) {
            isDisabled = true
        } else {
            return (
                <div className={s.quantity}>
                    <p className={s.subtitle}>Количество:</p>
                    <select className={s.select} value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(props.product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                </div>
            )
        }
    }

    let disabledBackdrop = () => {
        if (props.product.countInStock === 0) {
            return { background: '#d0d0d0', color: '#9a9a9a', border: '2px solid #9a9a9a' }
        }
    }

    const alertUser = () => alert('В разработке')

    return (
        <article className={s.content}>
            <h3 className={s.title}>{props.product.name}</h3>
            <p className={s.price}>{props.product.price} ₽
                <del className={props.product.oldPrice === 0
                    ? `${s.oldprice} ${s.none}`
                    : s.oldprice
                }>{props.product.oldPrice} ₽</del>
            </p>

            <div className={s.contains}>
                <h6 className={s.subtitle}>Артикул: <strong>{props.product.article}</strong></h6>
                <p className={s.description}>
                    <strong>Описание:</strong>
                    {props.product.description}
                </p>
                <button className={s.btn} onClick={alertUser}>Размераня сетка</button>
                <div className={s.status}>
                    <h6 className={s.subtitle}>Cтатус:
                        <strong> {props.product.countInStock > 0 ? "В наличии" : "Нет в наличии"}</strong>
                    </h6>
                    {displayBtn()}
                </div>
            </div>

            <button className={`${s.btn} ${s.green}`}
                type="button"
                onClick={addToCartHandler}
                disabled={isDisabled}
                style={disabledBackdrop()}
            >В корзину</button>
        </article>
    )
}

export default Content
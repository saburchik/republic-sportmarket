// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import s from "./styles/Product.module.scss"

const Product = ({ productId, name, isBadge, price, oldPrice, imageUrl }) => {
    // == Settings path to product by id:
    const pathToProduct = `/product/${productId}`

    // == Badge display settings: NEW || Sale || Empty;
    const displayBadge = () => {
        const setBadge = [s.badge]

        if (isBadge === 'NEW') {
            setBadge.push(s.color_green)
        } else if (isBadge === ' ') {
            setBadge.push(s.badge)
        } else {
            setBadge.push(s.color_red)
        }
        return setBadge.join(' ')
    }

    // == OldPrice display settings: oldPrice || Empty;
    const styleOldPrice = oldPrice === 0 ? `${s.oldprice} ${s.none}` : s.oldprice

    return (
        <li className={s.card}>
            <Link to={pathToProduct}>
                <span className={displayBadge()}>{isBadge}</span>
                <img className={s.img} src={imageUrl} alt={name} />
            </Link>
            <div className={s.info}>
                <strong className={s.title}>{name}</strong>
                <p className={s.price}>{price} ₽
                    <del className={styleOldPrice}>{oldPrice} ₽</del>
                </p>
                <Link className={s.play} to={pathToProduct}>
                    <svg viewBox="0 0 448 512">
                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>
                </Link>
            </div>
        </li >
    )
}

export default Product
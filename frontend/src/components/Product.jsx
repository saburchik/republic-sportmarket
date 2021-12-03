// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import styleCom from "../common.module.scss"
import styleLoc from "./styles/Product.module.scss"

const Product = ({ productId, name, isBadge, price, oldPrice, imageUrl }) => {
    // == Settings path to product by id:
    const pathToProduct = `/product/${productId}`

    // == Settings display: NEW || Sale || Empty;
    const displayBadge = () => {
        const setBadge = [styleCom.badge]

        if (isBadge === 'NEW') {
            setBadge.push(styleCom.color_green)
        } else if (isBadge === ' ') {
            setBadge.push(styleCom.badge)
        } else {
            setBadge.push(styleCom.color_red)
        }
        return setBadge.join(' ')
    }

    // == Settings display: oldPrice || Empty;
    const styleOldPrice = oldPrice === 0 ? `${styleCom.oldprice} ${styleCom.none}` : styleCom.oldprice

    return (
        <li className={styleLoc.card}>
            <Link to={pathToProduct}>
                <span className={displayBadge()}>{isBadge}</span>
                <img className={styleLoc.img} src={imageUrl} alt={name} />
            </Link>
            <div className={styleLoc.info}>
                <strong className={`${styleCom.title} ${styleCom.product}`}>{name}</strong>
                <p className={styleCom.price}>{price} ₽
                    <del className={styleOldPrice}>{oldPrice} ₽</del>
                </p>
                <Link className={styleLoc.play} to={pathToProduct}>
                    <svg viewBox="0 0 448 512">
                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>
                </Link>
            </div>
        </li >
    )
}

export default Product
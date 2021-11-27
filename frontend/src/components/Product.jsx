// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import styleCom from "../common.module.scss"
import styleLoc from "./styles/Product.module.scss"

const Product = ({ productId, name, status, price, oldPrice, imageUrl }) => {

    const setStatus = () => {
        const iconStatusColor = [styleLoc.status]

        if (status === 'NEW') {
            iconStatusColor.push(styleLoc.color_green)
        } else if (status === ' ') {
            iconStatusColor.push(styleLoc.status)
        } else {
            iconStatusColor.push(styleLoc.color_red)
        }
        return iconStatusColor.join(' ')
    }

    const styleOldPrice = oldPrice === 0 ? `${styleCom.oldprice} ${styleCom.none}` : styleCom.oldprice
    const pathToProduct = `/product/${productId}`

    return (
        <li className={styleLoc.card}>
            <Link to={pathToProduct}>
                <span className={setStatus()}>{status}</span>
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
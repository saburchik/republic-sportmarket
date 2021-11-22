import style from "./styles/Product.module.scss"
import { Link } from "react-router-dom"

const Product = ({ productId, name, status, price, oldPrice, imageUrl }) => {

    const checkStatus = () => {
        const iconStatusColor = [style.status]

        if (status === 'NEW') {
            iconStatusColor.push(style.status_green)
        } else if (status === ' ') {
            iconStatusColor.push(style.status)
        } else {
            iconStatusColor.push(style.status_red)
        }

        return iconStatusColor.join(' ')
    }

    return (
        <li className={style.card}>
            <Link className={style.link} to={`/product/${productId}`}>
                <span className={checkStatus()}>{status}</span>
                <img className={style.img} src={imageUrl} alt={name} />
            </Link>
            <div className={style.info}>
                <p className={style.title}>{name}</p>
                <p className={style.price}>{price} ₽
                    <del className={oldPrice === 0 ? `${style.oldprice} ${style.none}` : style.oldprice}>{oldPrice} ₽</del>
                </p>
                <Link to={`/product/${productId}`} className={style.play}>
                    <svg>
                        <use xlinkHref="#play-solid" />
                    </svg>
                </Link>
            </div>
        </li >
    )
}

export default Product
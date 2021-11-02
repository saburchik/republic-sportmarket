import './styles/Product.scss'
import { Link } from 'react-router-dom'

const Product = ({ productId, name, status, price, oldPrice, imageUrl }) => {

    const iconStatusColor = ['icon-status']

    if (status === "NEW") {
        iconStatusColor.push('icon-status-green')
    } else if (status === " ") {
        iconStatusColor.push('icon-status')
    } else {
        iconStatusColor.push('icon-status-red')
    }


    return (
        <li className="product-card">
            <Link className="product-link" to={`/product/${productId}`}>
                <span className={iconStatusColor.join(' ')}>{status}</span>
                <img
                    className="img"
                    src={imageUrl}
                    alt={name}
                />
            </Link>
            <div className="product-info">
                <p className="title">{name}</p>
                <p className="product-price">{price} ₽
                    <del className={oldPrice === 0 ? "old-price undefined" : "old-price"}>{oldPrice} ₽</del>
                </p>
                <Link to={`/product/${productId}`} className="product-play">
                    <svg>
                        <use xlinkHref="#play-solid" />
                    </svg>
                </Link>
            </div>
        </li >
    )
}

export default Product
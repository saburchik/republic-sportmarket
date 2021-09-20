import './styles/Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, category, name, price, description, productId, article, oldPrice, status }) => {

    const isOldPrice = oldPrice === 0

    const iconClasses = ['icon']

    if (status === "NEW") {
        iconClasses.push('icon-green')
    } else if (status === " ") {
        iconClasses.push('icon')
    } else {
        iconClasses.push('icon-red')
    }


    return (
        <div className="product">
            <Link className="adaptive__img" to={`/product/${productId}`}>
                <span className={iconClasses.join(' ')}>{status}</span>
                <img
                    className="product__img_size-m"
                    src={imageUrl}
                    alt={name}
                />
            </Link>

            <div className="product__info">
                <p className="title text">{name}</p>
                <p className="product__price">{price} ₽
                    <s className={isOldPrice ? "old-price undefined" : "old-price"}>{oldPrice}</s>
                </p>
                <Link to={`/product/${productId}`} className="info__item">
                    <i className="fas fa-play"></i>
                </Link>
            </div>
        </div >
    )
}

export default Product
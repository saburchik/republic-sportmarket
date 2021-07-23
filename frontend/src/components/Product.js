import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, category, name, price, description, productId, article, oldPrice }) => {
    return (
        <div className="product">
            <Link className="adaptive__img" to={`/product/${productId}`}>
                <img
                    className="product__img_size-m"
                    src={imageUrl}
                    alt={name}
                />
            </Link>

            <div className="product__info">
                <div className="product__text">
                    <p className="title text">{name}</p>
                    <p className="product__price">{price} ₽</p>
                </div>
                <Link to={`/product/${productId}`} className="info__item">
                    <i className="fas fa-play"></i>
                </Link>
            </div>
        </div >
    )
};

export default Product;
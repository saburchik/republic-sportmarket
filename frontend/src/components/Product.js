import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ imageUrl, name, price, description, productId, article }) => {
    return (
        <div className="product">
            <Link to={`/product/${productId}`}>
                <img
                    className="product__img_size-m"
                    src={imageUrl}
                    alt={name}
                />
            </Link>

            <div className="product__info">
                <div className="product__text">
                    <p className="title">{name}</p>
                    <p className="price">{price}₽</p>
                </div>
                <Link to={`/product/${productId}`} className="info__item">
                    <i className="fas fa-play"></i>
                </Link>
            </div>
        </div >
    );
};

export default Product;
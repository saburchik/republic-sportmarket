import './style/Product.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Product = ({ imageUrl, category, name, price, description, productId, article, oldPrice, status }) => {
    console.log(status);

    const [icon, setIcon] = useState('')

    return (
        <div className="product">
            <Link className="adaptive__img" to={`/product/${productId}`}>
                <span className="icon" >{status}</span>
                <img
                    className="product__img_size-m"
                    src={imageUrl}
                    alt={name}
                />
            </Link>

            <div className="product__info">
                <p className="title text">{name}</p>
                <p className="product__price">{price} ₽</p>
                <Link to={`/product/${productId}`} className="info__item">
                    <i className="fas fa-play"></i>
                </Link>
            </div>
        </div >
    )
}

export default Product
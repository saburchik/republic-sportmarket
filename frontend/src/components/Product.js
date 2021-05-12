import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <Link to={`/product/${1111}`}>
                <img className="product__img_size-m" src="https://i.imgur.com/HnuqR0w.jpg" alt="Playstation" />
            </Link>

            <div className="product__info">
                <div className="product__text">
                    <p className="title">Скейтборд RIDEX Octopus</p>
                    <p className="price">3 890 ₽</p>
                </div>
                <Link to={`/product/${1111}`} className="info__item">
                    <i className="fas fa-play"></i>
                </Link>
            </div>
        </div>
    )
}

export default Product
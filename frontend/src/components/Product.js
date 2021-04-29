import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="product">
            <Link to={`/product/${1111}`}>
                <img className="product__img" src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Playstation" />
            </Link>

            <div className="product__info">
                <p className="product__title">Скейтборд RIDEX Octopus</p>
                <p className="product__price">3 890 ₽</p>
                <Link to={`/product/${1111}`} className="info__item">
                    <i class="fas fa-play"></i>
                </Link>
            </div>
        </div>
    )
}

export default Product
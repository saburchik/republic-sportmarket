import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    return (
        <div className="cart">
            <Link to={`/product/${1111}`} >
                <img className="product__img_size-s"
                    src={item.imageUrl}
                    alt={item.name}
                />
            </Link>
            <div>
                <p className="product__article">артикул: <strong>848473</strong></p>
                <p className="title title__size_c">Скейтборд RIDEX Octopus</p>
            </div>
            <div>
                <div className="count__inner">
                    <button className="btn btn__count">-</button>
                    <span className="count__value">1</span>
                    <button className="btn btn__count">+</button>
                </div>
            </div>
            <div>
                <p className="price price__size_m">3 890 ₽
                                <strike className="old-price">4 890 ₽</strike>
                </p>
            </div>
            <div className="close">
                <button>&times;</button>
            </div>
        </div>
    )
};

export default CartItem;
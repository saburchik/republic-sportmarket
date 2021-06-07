import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="product__item">
            <Link className="top" to={`/product/${item.product}`} >
                <img className="product__img_size-s"
                    src={item.imageUrl}
                    alt={item.name}
                />
            </Link>
            <div className="top">
                <div className="cent">
                    <p className="product__article">артикул: <strong>{item.article}</strong></p>
                    <p className="title product__name">{item.name}</p>
                </div>
            </div>
            <div className="top border">
                <div className="cent">
                    <p className="count__qty">Количество:</p>
                    <select
                        className="count__select"
                        value={item.qty}
                        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                    >
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="top">
                <div className="cent">
                    <p className="count__qty">Цена:</p>
                    <p className="price price__size_m product__name">{item.price}₽
                                <strike className="old-price old-price__s">{item.oldPrice}₽</strike>
                    </p>
                </div>
            </div>
            <div className="close" onClick={() => removeHandler(item.product)}>
                <button>&times;</button>
            </div>
        </div>
    )
};

export default CartItem;
import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className="cart">
            <Link to={`/product/${item.product}`} >
                <img className="product__img_size-s"
                    src={item.imageUrl}
                    alt={item.name}
                />
            </Link>
            <div>
                <p className="product__article">артикул: <strong>848473</strong></p>
                <p className="title title__size_c">{item.name}</p>
            </div>
            <div>
                <div className="count__inner">
                    qty
                    <select
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
            <div>
                <p className="price price__size_m">{item.price}₽
                                <strike className="old-price">4 890 ₽</strike>
                </p>
            </div>
            <div className="close" onClick={() => removeHandler(item.product)}>
                <button>&times;</button>
            </div>
        </div>
    )
};

export default CartItem;
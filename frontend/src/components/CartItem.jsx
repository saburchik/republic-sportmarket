import "./styles/CartItem.scss";
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    const isOldPrice = item.oldPrice === 0 ? "old-price undefined" : "old-price"

    return (
        <div className="product__item">
            <div >
                <span className="product__remove imgr" onClick={() => removeHandler(item.product)} >&times;</span>
                <Link className="cartitem__img" to={`/product/${item.product}`}>
                    <img className="product__img_size-s"
                        src={item.imageUrl}
                        alt={item.name}
                    /></Link>
            </div>
            <div className="product__inner">
                <div className="product__height">
                    <p className="product__article">артикул: <strong>{item.article}</strong></p>
                    <p className="count__qty">{item.name}</p>
                </div>
            </div>
            <div className="product__inner">
                <div className="select__product">
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
            <div className="product__inner">
                <span className="product__remove price" onClick={() => removeHandler(item.product)} >&times;</span>
                <div className="product__height">
                    <p className="count__qty">Цена:</p>
                    <p className="product__price">{item.price}₽
                        <del className={isOldPrice}>{item.oldPrice}₽</del>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
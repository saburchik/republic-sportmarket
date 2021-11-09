import style from "./styles/CartItem.module.scss";
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    const isOldPrice = item.oldPrice === 0 ? "old-price undefined" : "old-price"

    return (
        <div className={style.product}>
            <div className={style.photo}>
                <span className={`${style.btn} ${style.remove}`} onClick={() => removeHandler(item.product)} >&times;</span>
                <Link className={style.link} to={`/product/${item.product}`}>
                    <img className={style.img}
                        src={item.imageUrl}
                        alt={item.name}
                    /></Link>
            </div>
            <div className={style.inner}>
                <div className={style.height}>
                    <p className={style.article}>артикул: <strong>{item.article}</strong></p>
                    <strong >{item.name}</strong>
                </div>
            </div>
            <div className={style.inner}>
                <div className={style.quantity}>
                    <p>Количество:</p>
                    <select className={style.select} value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                        {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={style.inner}>
                <span className={`${style.btn} ${style.price}`} onClick={() => removeHandler(item.product)} >&times;</span>
                <div className={style.height}>
                    <strong>Цена:</strong>
                    <p className={style.price}>{item.price}₽
                        <del className={isOldPrice}>{item.oldPrice}₽</del>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
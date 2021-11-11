import style from "./styles/CartItem.module.scss";
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    // const isOldPrice = item.oldPrice === 0 ? "old-price undefined" : "old-price"

    return (
        <div className={style.product}>
            <a className={`${style.btn}`} onClick={() => removeHandler(item.product)} href>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 62"><path className={style.btn__color} d="M33.83 31l9.9 9.9-2.83 2.83-9.9-9.9-9.9 9.9-2.83-2.83 9.9-9.9-9.9-9.9 2.83-2.83 9.9 9.9 9.9-9.9 2.83 2.83-9.9 9.9z"></path></svg>
            </a>

            <div className={style.photo}>
                <Link className={style.link} to={`/product/${item.product}`}>
                    <img className={style.img}
                        src={item.imageUrl}
                        alt={item.name}
                    /></Link>
            </div>
            <div className={style.inner}>
                <p className={style.article}>артикул: <strong>{item.article}</strong></p>
                <strong>{item.name}</strong>
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
                {/* <span className={`${style.btn} ${style.right}`} onClick={() => removeHandler(item.product)} >&times;</span> */}
                <strong>Цена:</strong>
                <p className={style.price}>{item.price}₽</p>
            </div>
        </div>
    )
};

export default CartItem;
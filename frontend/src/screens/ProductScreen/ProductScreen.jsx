import style from './ProductScreen.module.scss';
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom'

// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

// Components
import Advantages from '../../components/Advantages';

const ProductScreen = ({ match, history }) => {
    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => { window.scrollTo(0, 0) }, [pathname])
        return null
    }
    ScrollToTop()


    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }


    const checkStatus = () => {

        const iconStatusColor = ['icon-status']

        if (product.status === "NEW") {
            iconStatusColor.push('icon-status-green')
        } else if (product.status === " ") {
            iconStatusColor.push('icon-status')
        } else {
            iconStatusColor.push('icon-status-red')
        }

        return iconStatusColor.join(' ')
    }

    let isTrue = false
    const disableBtn = () => {
        if (product.countInStock === 0) {
            isTrue = true
        } else {
            return <div className={style.quantity}>
                <p>Количество:</p>
                <select className={style.select} value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                </select>
            </div>
        }
    }

    let addGrey = () => {
        if (product.countInStock === 0) {
            return { background: '#d0d0d0', color: '#9a9a9a', border: '1px solid #9a9a9a' }
        }
    }


    return (
        <div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                    <Advantages />
                    <div className={style.inner}>
                        <div className={style.images}>
                            <span className={checkStatus()}>{product.status}</span>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                            />
                        </div>

                        <div className={style.information}>
                            <header>
                                <p className={style.name}>{product.name}</p>
                                <p className={style.price}>
                                    {product.price} ₽
                                    <strike className={
                                        product.oldPrice === 0 ? "old-price undefined" : "old-price"
                                    }>{product.oldPrice}
                                    </strike>
                                </p>
                            </header>

                            <div className={style.contains}>
                                <p className={style.article}>артикул: <strong>{product.article}</strong></p>
                                <p className={style.description}>
                                    <strong>Описание:</strong>
                                    {product.description}
                                </p>
                                <button className={style.btn}>Размераня сетка</button>
                                <div className={style.status}>
                                    <p className={style.article}>статус:
                                        <strong> {product.countInStock > 0 ? "В наличии" : "Нет в наличии"}</strong>
                                    </p>
                                    {disableBtn()}
                                </div>
                            </div>

                            <button
                                className={`${style.btn} ${style.color}`}
                                type="button"
                                onClick={addToCartHandler}
                                disabled={isTrue}
                                style={addGrey()}
                            >В корзину</button>
                        </div>
                    </div>
                    <div className={style.reviews}>
                        <h3 className={style.title}>Отзывы</h3>
                        <div className={style.client}>
                            <strong className={`${style.title} ${style.client__name}`}>Saburchik:</strong>
                            <p className={`${style.description} ${style.description__text}`}>Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                            <strong className={style.date}>02.03.2021 | 19:42</strong>
                        </div>
                        <p className={style.alert}>
                            Отзывы могут оставлять только <Link className={style.link} to="/">зарегистрированные</Link> пользователи. <br />
                            <Link className={style.link} to="/" >Авторизоваться и оставить отзыв</Link>
                        </p>
                    </div>
                </>
            )
            }
        </div >
    );
};

export default ProductScreen
import './ProductScreen.scss';
import { useState, useEffect } from "react";
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



    return (
        <div className="productscreen">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                    <Advantages />
                    <div className="product__about">
                        <div className="description__inner">
                            <div className="block_img">
                                <span className={checkStatus(product)}>{product.status}</span>
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </div>

                            <div className="product__information">
                                <div>
                                    <p className="productscreen__title">{product.name}</p>
                                </div>

                                <div className="inner__contains">
                                    <p className="product__article">артикул: <strong>{product.article}</strong></p>
                                    <p className="productscreen__price">
                                        {product.price} ₽
                                        <strike className={
                                            product.oldPrice === 0 ? "old-price undefined" : "old-price"
                                        }>{product.oldPrice}
                                        </strike>
                                    </p>
                                    <p className="description description__product">
                                        <strong>Описание:</strong>
                                        {product.description}
                                    </p>
                                    <button className="productscreen__btn">Размераня сетка</button>
                                    <div className="grid__quantity">
                                        <p className="product__article">статус:
                                            <strong> {product.countInStock > 0 ? "В наличии" : "Нет в наличии"}</strong>
                                        </p>
                                        <div className="select__product">
                                            <p className="count__qty">Количество:</p>
                                            <select className="count__select" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="add__cart">
                                    {/* <Link to="/"> */}
                                    <button
                                        className="productscreen__btn color"
                                        type="button"
                                        onClick={addToCartHandler}
                                    >В корзину</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews" style={{ padding: '1rem' }}>
                        <h3 className="title title__size-sl">Отзывы</h3>
                        <div className="review__client">
                            <strong className="title client__name">Saburchik:</strong>
                            <p className="description client__text">Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                            <strong className="client__data">02.03.2021 | 19:42</strong>
                        </div>
                        <p className="review__alert">
                            Отзывы могут оставлять только <Link className="registration__link">зарегистрированные</Link> пользователи. <br />
                            <Link className="registration__link" >Авторизоваться и оставить отзыв</Link>
                        </p>
                    </div>
                </>
            )
            }
        </div >
    );
};

export default ProductScreen
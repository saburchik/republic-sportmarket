import './ProductScreen.css';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

// Components
import Advantages from '../components/Advantages';

const ProductScreen = ({ match, history }) => {

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

    return (
        <div className="productscreen">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                    <Advantages />
                    <div className="product__about">
                        <div className="container">
                            <div className="description__inner">

                                <img
                                    className="product__img_size-b"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />

                                <div className="product__information">
                                    <p className="product__article">артикул: <strong>{product.article}</strong></p>
                                    <p className="title title__size_c">{product.name}</p>
                                    <p className="sale">-20%</p>
                                    <p className="price price__size_m">
                                        {product.price}
                                        <strike className="old-price">4 890 ₽</strike>
                                    </p>
                                    <p className="description description__product">
                                        <strong>Описание</strong> <br />
                                        {product.description}
                                    </p>
                                    <div className="product__count">
                                        <button className="btn btn__size_g">Размераня сетка</button>
                                        {/* <div className="count__inner">
                                            <button className="btn btn__count">-</button>
                                            <span className="count__value">1</span>
                                            <button className="btn btn__count">+</button>
                                        </div> */}
                                        Qty
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <p>Статус: <span>{product.countInStock > 0 ? "В наличии" : "Нет в наличии"}</span></p>
                                    {/* <Link to="/"> */}
                                    <button
                                        className="btn btn__in-cart"
                                        type="button"
                                        onClick={addToCartHandler}
                                    >В корзину</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews">
                        <div className="container">
                            <h3 className="title title__size_m">Отзывы</h3>
                            <div className="review__client">
                                <strong className="title client__name">Saburchik:</strong>
                                <p className="description client__text">Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                                <strong className="client__data">02.03.2021 | 19:42</strong>
                            </div>
                            <p className="review__alert">
                                Отзывы могут оставлять только <a className="registration__link">зарегистрированные</a> пользователи. <br />
                                <a className="registration__link" >Авторизоваться и оставить отзыв</a>
                            </p>
                        </div>
                    </div>
                </>
            )
            }
        </div >
    );
};

export default ProductScreen
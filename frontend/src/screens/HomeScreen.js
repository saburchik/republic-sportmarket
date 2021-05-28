import './HomeScreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from '../components/Product';
import Advantages from '../components/Advantages';
import Footer from '../components/Footer';

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (<div className="homescreen">
        <div className="homescreen__intro">
            <div className="container">
                <h1 className="homescreen__title">Отдыхай в <br /> движении</h1>
            </div>
        </div>
        <Advantages />
        <div className="catalog">
            <div className="container">
                <h2 className="title title__size_m">Ассортимент</h2>
                <div className="catalog__info">
                    <div className="sidebar">
                        <h3 className="title title__size_m">Категории</h3>
                        <ul className="sidebar__info">
                            <li className="sidebar__item">
                                Скейтбординг
                                    <i className="fas fa-chevron-down" />
                            </li>
                            <li className="sidebar__item">
                                Сноубординг
                                    <i className="fas fa-chevron-down" />
                            </li>
                            <li className="sidebar__item">
                                Армотизаторы для сноуборда
                                <i className="fas fa-chevron-down" />
                            </li>
                        </ul>
                    </div>
                    <div className="catalog__products">
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : error ? (
                            <h2>{error}</h2>
                        ) : (
                            products.map((product) => <Product
                                key={product._id}
                                productId={product._id}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                imageUrl={product.imageUrl}
                            />)
                        )}
                    </div>
                </div>
            </div>
        </div>
        <div className="feedback">
            <div className="container">
                <h3 className="title title__size_m">Отзывы покупателей</h3>
                <div className="feedback-in">
                    <button className="arrow arrow__left"><i className="fas fa-chevron-left"></i></button>
                    <div className="feedback__wrapper">
                        <img className="feedback__img" src="https://i.imgur.com/2yirlfS.png" alt="reviews" />
                        <div className="feedback__text">
                            <p className="feedback__review">
                                Отличный интернет магазин, с продукцией высокого качества.
                                Имеется вся подробная информация о товаре.
                                И даже, если возникут дополнительные вопросы,
                                специалисты поддержки в кротчайшее время отвечают, и подсказывают.
                            <br />
                                <span>---- Сын Тони Хоука</span>
                            </p>
                        </div>
                    </div>
                    <button className="arrow arrow__right"><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
        <div className="digest">
            <div className="container">
                <div className="digest__wrapper">
                    <h3 className="title title__size_m white">Подпишись на наш Дайджест</h3>
                    <p className="description digest__description">
                        Подпишитесь на новостную рассылку Республики и будь всегда в курсе всех новостей,
                        распродаж, акций и бонусов только для своих. Обещаем не спамить и не надоедать письмами.
                    </p>
                    <form>
                        <input className="input digest__input" placeholder="Введите ваш Email" />
                        <button className="input__btn digest__btn"><i className="fas fa-envelope"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
};

export default HomeScreen
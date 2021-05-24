import './HomeScreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from '../components/Product';
import Advantages from '../components/Advantages';

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
        <div>
            <h3 className="title title__size_m">Отзывы покупателей</h3>
        </div>
    </div>
    )
};

export default HomeScreen
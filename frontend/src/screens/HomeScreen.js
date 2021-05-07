import './HomeScreen.css';

// Components
import Product from '../components/Product';
import Advantages from '../components/Advantages';
// import nike from './nike.jpg';
// import background from './background.jpg';


const HomeScreen = () => {
    return <div className="homescreen">
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
                                    <i class="fas fa-chevron-down" />
                            </li>
                            <li className="sidebar__item">
                                Сноубординг
                                    <i class="fas fa-chevron-down" />
                            </li>
                            <li className="sidebar__item">
                                Армотизаторы для сноуборда
                                <i class="fas fa-chevron-down" />
                            </li>
                        </ul>
                    </div>
                    <div className="catalog__products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h3 className="title title__size_m">Отзывы покупателей</h3>
        </div>
    </div>
};

export default HomeScreen
import './HomeScreen.css';

// Components
import Product from '../components/Product';
// import background from './background.jpg';


const HomeScreen = () => {
    return <div className="homescreen">
        <div className="homescreen__intro">
            <div className="container">
                <h1 className="homescreen__title">Отдыхай в <br /> движении</h1>
            </div>
            {/* <img src={background} alt="background-intro" /> */}
        </div>
        <div className="advantages">
            <div className="container">
                <ul className="advantages__inner">
                    <li>
                        <i className="fas fa-tags"></i>
                        <span className="advantages__text">Скидки при онлайн оплате</span>
                    </li>
                    <li>
                        <i className="fas fa-truck"></i>
                        <span className="advantages__text">Быстрая Доставка</span>
                    </li>
                    <li>
                        <i className="fas fa-box-open"></i>
                        <span className="advantages__text">Удобный возврат</span>
                    </li>
                    <li>
                        <i className="fas fa-balance-scale" />
                        <span className="advantages__text">Гарантия полгода</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="catalog">
            <div className="container">
                <h2 className="catalog__title">Ассортимент</h2>
                <div className="catalog__info">
                    <div className="sidebar">
                        <h3 className="sidebar__title">Категории</h3>
                        <ul className="sidebar__info">
                            <li className="sidebar__item">Скейтбординг</li>
                            <li className="sidebar__item">Сноубординг</li>
                            <li className="sidebar__item">Армотизаторы для сноуборда</li>
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
    </div>
};

export default HomeScreen
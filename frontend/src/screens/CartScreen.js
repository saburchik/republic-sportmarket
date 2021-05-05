import './CartScreen.css';
import Advantages from '../components/Advantages';

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <Advantages />
            <div className="cartscreen__inner">
                <div className="container">
                    <h3 className="title title__size_m">В вашей корзине:</h3>
                    <div className="order">
                        <div className="order__left">
                            <div className="order__img">
                                <img className="cartscreen__img" src="https://i.imgur.com/HnuqR0w.jpg" />
                            </div>
                            <div className="order__info">
                                <div className="order__item">
                                    <p className="prod-article">артикул: <strong>848473</strong></p>
                                    <p className="title title__size_c">Скейтборд RIDEX Octopus</p>
                                </div>
                                <div className="order__item">
                                    <div className="quantity__inner">
                                        <button className="btn btn__quantity">-</button>
                                        <span className="quantity__value">1</span>
                                        <button className="btn btn__quantity">+</button>
                                    </div>
                                </div>
                                <div className="order__item">
                                    <p className="price price__size_m">3 890 ₽
                                <strike className="old-price">4 890 ₽</strike>
                                    </p>
                                </div>
                            </div>
                            <div className="close">
                                <button>&times;</button>
                            </div>

                        </div>
                        <div className="order__right">
                            <p className="title">Стоимость заказа</p>
                            <p className="title__text">Цена за 1 товар:<span>3890 Р</span></p>
                            <p className="title__text">Скидка общая:<span>-990 Р</span></p>
                            <strong className="title__text">
                                Итого <span>2 890 Р</span>
                            </strong>
                            <button className="btn order__btn">Оформить заказ</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default CartScreen
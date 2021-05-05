import Advantages from '../components/Advantages';
import './ProductScreen.css';

const ProductScreen = () => {
    return <div className="productscreen">
        <Advantages />
        <div className="productscreen__card">
            <div className="container">
                <div className="productscreen__inner">
                    <img className="productscreen__img" src="https://i.imgur.com/HnuqR0w.jpg" />
                    <div className="productscreen__right">
                        <div className="productscreen__info">
                            <p className="prod-article">артикул: <strong>848473</strong></p>
                            <p className="title title__size_c">Скейтборд RIDEX Octopus</p>
                            <p className="sale">-20%</p>
                            <p className="price price__size_m">3 890 ₽
                                <strike className="old-price">4 890 ₽</strike>
                            </p>
                            <p className="description description__product">
                                <strong>Описание</strong> <br />
                                Tracer Classic в цвете Black / Bar - классический круизер GLOBE с мягкими коническими колесами. Он доступен в размере 31,125 "x 8,25" x 16,5 "WB. Изготовлен из твердого клена Resin-7.
                            </p>
                            <div className="quantity">
                                <strong>Количество</strong>
                                <div className="quantity__btns">
                                    <div className="quantity__inner">
                                        <button className="btn btn__quantity">-</button>
                                        <span className="quantity__value">1</span>
                                        <button className="btn btn__quantity">+</button>
                                    </div>
                                    <div className="size-grid">
                                        <button className="btn btn__size_g">Размераня сетка</button>
                                    </div>
                                </div>
                            </div>
                            <div className="in-cart">
                                <button className="btn btn__in-cart">В корзину</button>
                            </div>
                            {/* <div className="unavailable">
                                <strong>Товара нет в наличии</strong>
                                <button className="btn">Уведомить</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="container">
                <h3 className="title title__size_m">Отзывы</h3>
                <div className="reviews__client">
                    <strong className="title client__name">Saburchik:</strong>
                    <p className="description client__text">Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                    <strong className="client__data">02.03.2021 | 19:42</strong>
                </div>
                <p className="alert">
                    Отзывы могут оставлять только <a className="alert__link">зарегистрированные</a> пользователи. <br />
                    <a className="alert__link" >Авторизоваться и оставить отзыв</a>
                </p>
            </div>
        </div>
    </div>
};

export default ProductScreen
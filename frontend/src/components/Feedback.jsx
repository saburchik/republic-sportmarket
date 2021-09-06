import "./styles/Feedback.scss";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Feedback = () => {
    let settings = {
        dot: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 50000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
    }

    return (
        <section className="feedback">
            <div className="container">
                <h1 className="title feedback__title">Отзывы покупателей</h1>
                <Slider className="feedback__contains" {...settings}>
                    <div className="slider">
                        <div className="slider__wrapper">
                            <img className="slider__img" src="https://i.imgur.com/2yirlfS.png" alt="Отзывы" />
                            <p className="text slider__text">
                                Отличный интернет магазин, с продукцией высокого качества.
                                Имеется вся подробная информация о товаре.
                                И даже, если возникут дополнительные вопросы,
                                специалисты поддержки в кротчайшее время отвечают, и подсказывают.
                                <b>– Сын Тони Хоука</b>
                            </p>
                        </div>
                    </div>

                    <div className="slider">
                        <div className="slider__wrapper">
                            <img className="slider__img" src="https://i.imgur.com/XN1DR0U.png" alt="reviews" />
                            <p className="text slider__text">
                                Максимально индивидуальный подход к выбору товаров.
                                В Республике. Дружелюбный коллектив, приятная атмосфера.
                                Очень доволен. Заказали лонгборд в четверг, привезли в пятницу.
                                Молодцы ребята.
                                <b>– Андрей Андреевич Замай</b>
                            </p>
                        </div>
                    </div>

                    <div className="slider">
                        <div className="slider__wrapper">
                            <img className="slider__img" src="https://i.imgur.com/HMp3Min.png" alt="reviews" />
                            <p className="text slider__text">
                                Не большой ИМ. Выставочных мест не много.
                                Конечно, до Сквота далеко, но заказать скейтборд или получить заказ то,
                                что нужно и не нужно ехать на другой конец города.
                                И очень приветливый персонал, молодцы ребятки.
                                <b>– Овсянкин</b>
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Feedback
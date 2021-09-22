import "./styles/Feedback.scss"
import Sliders from 'react-slick'
import "slick-carousel/slick/slick.css"

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
        <article style={{ padding: "1rem" }}>
            <h2 className="title title-size-sl">Отзывы покупателей</h2>
            <Sliders className="feedback-inner" {...settings}>
                <div>
                    <div className="slider-inner">
                        <img className="slider-img" src="https://i.imgur.com/2yirlfS.png" alt="Изображение пользователя" />
                        <p className="title slider-comment">
                            Отличный интернет магазин, с продукцией высокого качества.
                            Имеется вся подробная информация о товаре.
                            И даже, если возникут дополнительные вопросы,
                            специалисты поддержки в кротчайшее время отвечают, и подсказывают.
                            <strong>– Сын Тони Хоука</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="slider-inner">
                        <img className="slider-img" src="https://i.imgur.com/XN1DR0U.png" alt="Изображение пользователя" />
                        <p className="title slider-comment">
                            Максимально индивидуальный подход к выбору товаров.
                            В Республике. Дружелюбный коллектив, приятная атмосфера.
                            Очень доволен. Заказали лонгборд в четверг, привезли в пятницу.
                            Молодцы ребята.
                            <strong>– Андрей Андреевич Замай</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="slider-inner">
                        <img className="slider-img" src="https://i.imgur.com/HMp3Min.png" alt="Изображение пользователя" />
                        <p className="title slider-comment">
                            Не большой ИМ. Выставочных мест не много.
                            Конечно, до Сквота далеко, но заказать скейтборд или получить заказ то,
                            что нужно и не нужно ехать на другой конец города.
                            И очень приветливый персонал, молодцы ребятки.
                            <strong>– Овсянкин</strong>
                        </p>
                    </div>
                </div>
            </Sliders>
        </article>
    )
}

export default Feedback
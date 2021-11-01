import "./styles/Feedback.scss"
import Sliders from 'react-slick'
import "slick-carousel/slick/slick.css"

// Images
import feedback_1 from "../assets/feedback/feedback_1.png"
import feedback_2 from "../assets/feedback/feedback_2.png"
import feedback_3 from "../assets/feedback/feedback_3.png"

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
            <h2 className="title title__size-sl">Отзывы покупателей</h2>
            <Sliders className="slide-inner" {...settings}>
                <div>
                    <div className="slider-item">
                        <img className="slider-img" src={feedback_1} alt="Изображение пользователя" />
                        <p className="discription slider-comment">
                            Отличный интернет магазин, с продукцией высокого качества.
                            Имеется вся подробная информация о товаре.
                            И даже, если возникут дополнительные вопросы,
                            специалисты поддержки в кротчайшее время отвечают, и подсказывают.
                            <strong>– Сын Тони Хоука</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="slider-item">
                        <img className="slider-img" src={feedback_2} alt="Изображение пользователя" />
                        <p className="discription slider-comment">
                            Максимально индивидуальный подход к выбору товаров.
                            В Республике. Дружелюбный коллектив, приятная атмосфера.
                            Очень доволен. Заказали лонгборд в четверг, привезли в пятницу.
                            Молодцы ребята.
                            <strong>– Андрей Андреевич Замай</strong>
                        </p>
                    </div>
                </div>

                <div>
                    <div className="slider-item">
                        <img className="slider-img" src={feedback_3} alt="Изображение пользователя" />
                        <p className="discription slider-comment">
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
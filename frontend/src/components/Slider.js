import "./Slider.css";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider className="feedback-in" {...settings}>
            <div >
                <div className="feedback__wrapper">
                    <img className="feedback__img" src="https://i.imgur.com/2yirlfS.png" alt="reviews" />
                    <div className="feedback__text">
                        <p className="feedback__review">
                            Отличный интернет магазин, с продукцией высокого качества.
                            Имеется вся подробная информация о товаре.
                            И даже, если возникут дополнительные вопросы,
                            специалисты поддержки в кротчайшее время отвечают, и подсказывают.
                <br />
                            <span>– Сын Тони Хоука</span>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="feedback__wrapper">
                    <img className="feedback__img" src="https://i.imgur.com/XN1DR0U.png" alt="reviews" />
                    <div className="feedback__text">
                        <p className="feedback__review">
                            Максимально индивидуальный подход к выбору товаров.
                            В Республике. Дружелюбный коллектив, приятная атмосфера.
                            Очень доволен. Заказали лонгборд в четверг, привезли в пятницу.
                            Молодцы ребята.
                <br />
                            <span>– Андрей Андреевич Замай</span>
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className="feedback__wrapper">
                    <img className="feedback__img" src="https://i.imgur.com/HMp3Min.png" alt="reviews" />
                    <div className="feedback__text">
                        <p className="feedback__review">
                            Не большой ИМ. Выставочных мест не много.
                            Конечно, до Сквота далеко, но заказать скейтборд или получить заказ то,
                            что нужно и не нужно ехать на другой конец города.
                            И очень приветливый персонал, молодцы ребятки.
                <br />
                            <span>– Овсянкин</span>
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    )
};

export default ImageSlider;


























// import React, { useRef, useState, useEffect } from 'react';
// import "./Slider.css";

// const Slide = ({ bg, children }) => {
//     return (
//         <div className="slider__slide">
//             <div className="slider__slide_content" style={bg ? { backgroundImage: `url(${bg})` } : null}>
//                 {children}
//             </div>
//         </div>

//     );
// }

// const Slider = ({ children, showNav, startFrom }) => {
//     const slider = useRef();
//     const [activeSlide, setActiveSlide] = useState(startFrom ? startFrom : 0);

//     useEffect(() => {
//         if (startFrom) {
//             slider.current.style.transform = `translateX(${startFrom * -100}%)`;
//         }
//     }, [startFrom]);

//     const showPrevSlide = () => {
//         if (activeSlide > 0) {
//             slider.current.style.transform = `translateX(${(activeSlide - 1) * -100}%)`;
//             setActiveSlide(prev => prev - 1);
//         }
//     }

//     const showNextSlide = () => {
//         if (activeSlide < children.length - 1) {
//             slider.current.style.transform = `translateX(${(activeSlide + 1) * -100}%)`;
//             setActiveSlide(prev => prev + 1);
//         }
//     }

//     const updateNavElements = (index) => {
//         setActiveSlide(index);
//         slider.current.style.transform = `translateX(${index * -100}%)`;
//     }

//     return (
//         <div className="slider-wrapper">
//             <div className="slider" ref={slider}>
//                 {children}
//             </div>

//             {showNav && <div className="slider-wrapper__nav">
//                 {children.map((s, i) => <span key={i} className={activeSlide === i ? 'active' : ''} onClick={() => updateNavElements(i)}></span>)}
//             </div>}
//             <div className="feedback">
//                 <div className="container">
//                     <h3 className="title title__size_m">Отзывы покупателей</h3>
//                     <div className="feedback-in">
//                         <button
//                             className="arrow arrow__left"
//                             onClick={showPrevSlide}
//                             disabled={activeSlide === 0}
//                         >
//                             <i className="fas fa-chevron-left"></i>
//                         </button>
//                         <div className="feedback__wrapper">
//                             <img className="feedback__img" src="https://i.imgur.com/2yirlfS.png" alt="reviews" />
//                             <div className="feedback__text">
//                                 <p className="feedback__review">
//                                     Отличный интернет магазин, с продукцией высокого качества.
//                                     Имеется вся подробная информация о товаре.
//                                     И даже, если возникут дополнительные вопросы,
//                                     специалисты поддержки в кротчайшее время отвечают, и подсказывают.
//                 <br />
//                                     <span>– Сын Тони Хоука</span>
//                                 </p>
//                             </div>
//                         </div>

//                         <button
//                             className="arrow arrow__right"
//                             onClick={showNextSlide}
//                             disabled={activeSlide === children.length - 1}
//                         >
//                             <i className="fas fa-chevron-right"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export { Slide, Slider };
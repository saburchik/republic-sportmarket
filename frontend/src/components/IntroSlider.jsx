import "./styles/IntroSlider.scss"
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"

// Background images
import introWinter from "../assets/intro_winter.jpg"
import introSkate from "../assets/intro_skate.jpg"

const IntroSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'intro-lines',
    }

    return (
        <Slider className="intro-slider" {...settings}>
            <article className="intro-item">
                <img
                    className="intro-img"
                    src={introWinter}
                    alt="Сноубординг"
                />
                <div className="intro-text">
                    <h1 className="title intro-title">Отдыхай В
                        <span>Движении</span>
                    </h1>
                </div>
            </article>

            <article className="intro-item">
                <img
                    className="intro-img"
                    src={introSkate}
                    alt="Скейтбординг"
                />
                <div className="intro-text intro-position">
                    <h1 className="title intro-title" style={{ color: "#CECECE" }}>
                        Сделай свою
                        <span>жизнь Ярче!</span>
                    </h1>
                </div>
            </article>
        </Slider>
    )
}

export default IntroSlider
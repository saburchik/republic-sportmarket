import "./styles/IntroSlider.scss";
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';

// Background images
import introImg from '../assets/intro.jpg';
import introImgSecond from '../assets/intro_second.jpg';

const IntroSlider = () => {
    // Settings slick-carousel
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
            <div className="intro-item">
                <img className="intro-img" src={introImg} alt="Фоновое изображение" />
                <div className="intro-text">
                    <p className="intro-title">Отдыхай В
                        <span>Движении</span>
                    </p>
                </div>
            </div>

            <div className="intro-item">
                <img className="intro-img" src={introImgSecond} alt="Фоновое изображение" />
                <div className="intro-text__second">
                    <p className="intro-title__second">Сделай свою
                        <span>жизнь Ярче!</span>
                    </p>
                </div>
            </div>
        </Slider>
    )
}

export default IntroSlider
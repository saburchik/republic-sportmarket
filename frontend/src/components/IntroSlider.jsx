import "./styles/IntroSlider.scss"
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"

const IntroSlider = (props) => {
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
    let slid = props.state.IntroSl.map(i => <article key={i.key} className="intro-item">
        <img src={i.img} className="intro-img" alt="Сноубординг" />
        <h1 className={`intro__text ${i.position}`}>
            {i.title}
        </h1>
    </article >)

    return (
        <Slider className="intro-slider" {...settings}>
            {slid}
        </Slider>
    )
}

export default IntroSlider
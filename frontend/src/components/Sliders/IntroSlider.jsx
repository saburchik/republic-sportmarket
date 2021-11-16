import React from "react"
import Slider from "react-slick"
import style from "./styles/IntroSlider.module.scss"
import './styles/mainSlick.scss'

const IntroSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 50000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: style.lines,
    }

    let drawSliders = props.state.IntroSliders.map(s => {
        let text = `${style.text} ${s.classPosition !== '' ? style.left : ''}`

        return (
            <article className={style.item} key={s.id}>
                <img className={style.img} src={s.img} alt={s.alt} />
                <h1 className={text}>
                    {s.title}
                </h1>
            </article >
        )
    })

    return (
        <Slider className={style.inner} {...settings}>
            {drawSliders}
        </Slider>
    )
}

export default IntroSlider
// == Base:
import React from "react"
import SlidersIntro from "react-slick"
// == Styles:
import s from "./styles/Intro.module.scss"
import "./styles/slick.scss"

const Intro = (props) => {
    //== Settings slider:
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 50000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: s.lines,
    }

    //== Drawing sliders from Business Logic State(state.js):
    let drawSliders = props.state.Intro.map(item => {
        //== Each slider has its additional style class or an empty string, for individual customization:
        const setTitle = `${s.title} ${item.styleClass !== '' ? s.left : ''}`

        return (
            <article key={item.id}>
                <h1 className={setTitle}>{item.title} <br /> {item.titleSplit}</h1>
                <picture>
                    <source srcSet={item.imgWebp} type="image/webp" />
                    <img className={s.img} src={item.img} alt={item.alt} />
                </picture>
            </article >
        )
    })

    return (
        <SlidersIntro className={s.inner} {...settings}>
            {drawSliders}
        </SlidersIntro>
    )
}

export default Intro
// == Base:
import React from "react"
import SlidersIntro from "react-slick"
// == Styles:
import styleLoc from "./styles/IntroSlider.module.scss"
import "./styles/mainSlick.scss"

const IntroSlider = (props) => {
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
        dotsClass: styleLoc.lines,
    }

    //== Drawing sliders from Business Logic State(state.js):
    let drawSliders = props.state.intro.map(s => {
        //== Each slider has its additional style class or an empty string, for individual customization:
        const setTitle = `${styleLoc.title} ${s.styleClass !== '' ? styleLoc.left : ''}`

        return (
            <article key={s.id}>
                <h1 className={setTitle}>{s.title}</h1>
                <img className={styleLoc.img} src={s.img} alt={s.alt} />
            </article >
        )
    })

    return (
        <SlidersIntro className={styleLoc.inner} {...settings}>
            {drawSliders}
        </SlidersIntro>
    )
}

export default IntroSlider
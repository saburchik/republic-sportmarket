// == Base:
import React from "react"
import SlidersFeedback from "react-slick"
// == Styles:
import styleLoc from "./styles/Feedback.module.scss"
import './styles/slick.scss'

const Feedback = (props) => {
    //== Settings slider:
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

    //== Drawing sliders from Business Logic State(state.js):
    let drawSliders = props.state.feedback.map(i => {
        return (
            <div key={i.id}>
                <div className={styleLoc.item}>
                    <img className={styleLoc.img} src={i.img} alt={i.alt} />
                    <em className={styleLoc.comment}>
                        {i.comment}
                        <strong>– {i.author}</strong>
                    </em>
                </div>
            </div>
        )
    })

    return (
        <article className={styleLoc.article}>
            <h2 className={styleLoc.title}>Отзывы покупателей</h2>
            <SlidersFeedback className={styleLoc.inner} {...settings}>
                {drawSliders}
            </SlidersFeedback>
        </article>
    )
}

export default Feedback
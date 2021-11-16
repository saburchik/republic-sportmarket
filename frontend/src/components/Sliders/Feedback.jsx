import React from "react"
import style from "./styles/Feedback.module.scss"
import Sliders from "react-slick"
import './styles/mainSlick.scss'

const Feedback = (props) => {
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

    let drawSliders = props.state.FeedbackSliders.map(i => {
        return (
            <div>
                <div className={style.item}>
                    <img className={style.img} src={i.img} alt={i.alt} />
                    <em className={style.comment}>
                        {i.comment}
                        <strong>– {i.author}</strong>
                    </em>
                </div>
            </div>
        )
    })

    return (
        <article className={style.article}>
            <h2 className={style.title}>Отзывы покупателей</h2>
            <Sliders className={style.inner} {...settings}>
                {drawSliders}
            </Sliders>
        </article>
    )
}

export default Feedback
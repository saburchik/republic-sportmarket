// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import styleCom from "../common.module.scss"
import styleLoc from "./styles/Comment.module.scss"

const Comment = () => {
    return (
        <article className={styleLoc.inner}>
            <h3 className={styleCom.title}>Отзывы</h3>
            <div className={styleLoc.comment}>
                <strong className={`${styleCom.title} ${styleCom.comment}`}>Saburchik:</strong>
                <p className={`${styleCom.description} ${styleCom.comment}`}>Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                <strong className={`${styleCom.title} ${styleCom.comment}`} style={{ textAlign: 'right' }}>02.03.2021 | 19:42</strong>
            </div>
            <strong className={`${styleCom.description} ${styleCom.comment}`}>
                Отзывы могут оставлять только <Link className={styleLoc.link} to="/login">зарегистрированные</Link> пользователи,<br />
                <Link className={styleLoc.link} to="/login">авторизоваться и оставить отзыв</Link>.
            </strong>
        </article>
    )
}

export default Comment
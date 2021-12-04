// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import s from "./styles/Comment.module.scss"

const Comment = () => {
    return (
        <article className={s.inner}>
            <h3 className={s.title}>Отзывы</h3>
            <div className={s.comment}>
                <strong className={s.title__user}>Saburchik:</strong>
                <p className={s.description}>Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                <strong className={s.title__date} style={{ textAlign: 'right' }}>02.03.2021 | 19:42</strong>
            </div>
            <strong className={s.description}>
                Отзывы могут оставлять только <Link className={s.link} to="/login">зарегистрированные</Link> пользователи,<br />
                <Link className={s.link} to="/login">авторизоваться и оставить отзыв</Link>.
            </strong>
        </article>
    )
}

export default Comment
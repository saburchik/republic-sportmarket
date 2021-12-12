// == Base:
import React from "react"
// == Styles:
import s from './Title.module.scss'

const Title = (props) => {
    return <h2 className={s.title}>{props.title}</h2>
}

export default Title

// == Base:
import React from "react"
// == Styles:
import styleLoc from './Title.module.scss'

const Title = (props) => {
    return <h4 className={`${props.classStyle} ${styleLoc.title}`}>{props.title}</h4>
}

export default Title

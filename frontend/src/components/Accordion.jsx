// == Base:
import React, { useState, useRef } from "react"
// == Styles:
import styleLoc from "./styles/Accordion.module.scss"

function Accordion(props) {
    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0')
    const [setRotate, setRotateState] = useState(styleLoc.arrow)

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === '' ? styleLoc.active : '')
        setHeightState(
            setActive === styleLoc.active ? '0' : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === styleLoc.active ? '' : styleLoc.rotate
        )
    }

    //-- Drawing subtitles in the catalog list --<
    let setSubtitles = props.subtitles.map(s => <li key={s.id} className={styleLoc.subtitle}>{s.subtitle}</li>)

    return (
        <li className={styleLoc.item}>
            <h3 className={`${styleLoc.title} ${setActive}`} onClick={toggleAccordion}>
                {props.title}
                <svg className={`${styleLoc.arrow} ${setRotate}`} viewBox="0 0 448 512">
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
            </h3 >
            <ul ref={content} className={styleLoc.inner} style={{ maxHeight: `${setHeight}` }}>
                {setSubtitles}
            </ul>
        </li>
    )
}

export default Accordion
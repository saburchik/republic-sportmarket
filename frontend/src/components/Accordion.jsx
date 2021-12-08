// == Base:
import React, { useState, useRef } from "react"
// == Styles:
import s from "./styles/Accordion.module.scss"

function Accordion(props) {
    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0')
    const [setRotate, setRotateState] = useState(s.arrow)

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === '' ? s.active : '')
        setHeightState(
            setActive === s.active ? '0' : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === s.active ? '' : s.rotate
        )
    }

    //-- Drawing subtitles in the catalog list --<
    let setSubtitles = props.subtitles.map(t => <li key={t.id} className={s.subtitle}>{t.subtitle}</li>)

    return (
        <li className={s.item}>
            <h3 className={`${s.title} ${setActive}`} onClick={toggleAccordion}>
                {props.title}
                <svg className={`${s.arrow} ${setRotate}`} viewBox="0 0 448 512">
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
            </h3 >
            <ul ref={content} className={s.inner} style={{ maxHeight: `${setHeight}` }}>
                {setSubtitles}
            </ul>
        </li>
    )
}

export default Accordion
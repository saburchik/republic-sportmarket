import style from "./styles/Accordion.module.scss"
import { useState, useRef } from "react"

function Accordion(props) {
    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0')
    const [setRotate, setRotateState] = useState(style.arrow_icon)

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === '' ? style.active : '')
        setHeightState(
            setActive === style.active ? '0' : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === style.active ? '' : style.rotate
        )
    }

    // Drawing subtitles in the catalog list
    let setSubtitles = props.subtitles.map(s => <li key={s.id} className={style.subtitle} tabIndex="2">
        {s.subtitle}
    </li>)

    return (
        <li className={style.item}>
            <h3 className={`${style.title} ${setActive}`} onClick={toggleAccordion} tabIndex="1">
                {props.title}
                <svg className={`${style.arrow_icon} ${setRotate}`}>
                    <use xlinkHref="#chevron-down" />
                </svg>
            </h3 >
            <ul ref={content} className={style.inner} style={{ maxHeight: `${setHeight}` }}>
                {setSubtitles}
            </ul>
        </li>
    )
}

export default Accordion
import "./styles/Accordion.scss"
import { useState, useRef } from "react"

function Accordion(props) {
    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0px')
    const [setRotate, setRotateState] = useState('arrow-icon')

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === '' ? 'active' : '')
        setHeightState(
            setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
        )
        setRotateState(
            setActive === 'active' ? '' : 'arrow-rotate'
        )
    }

    // Drawing subtitles in categories
    let Subtitles = props.subtitleList.map(s => <li
        key={s.id}
        className="accordion-subtitle"
    >
        {s.subtitle}
    </li>)

    return (
        <ul className="accordion">
            <svg display="none">
                <symbol id="chevron-down" viewBox="0 0 448 512">
                    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </symbol>
            </svg>

            <li className="accordion-item">
                <h3 className={`accordion-title ${setActive}`} onClick={toggleAccordion}>
                    {props.title}
                    <svg className={`arrow-icon ${setRotate}`}>
                        <use xlinkHref="#chevron-down" />
                    </svg>
                </h3 >
                <div
                    ref={content}
                    className="accordion-inner"
                    style={{ maxHeight: `${setHeight}` }}
                >
                    <ul className="accordion-list">
                        {Subtitles}
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default Accordion
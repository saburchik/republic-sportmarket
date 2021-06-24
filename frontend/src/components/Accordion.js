import { useState, useRef } from "react";
import "./Accordion.css";

function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("fa-chevron-down");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        console.log(content.current.scrollHeight);
        setRotateState(
            setActive === "active" ? "fa-chevron-down" : "fa-chevron-down rotate"
        )
    }

    return (
        <div className="sidebar">
            <h3 className="title title__size_m">Категории</h3>
            <ul className="sidebar__info">
                <li className="sidebar__item">
                    <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
                        Скейтбординг
                        <i className={`fas fa-chevron-down ${setRotate}`} />
                    </div>
                    <div
                        ref={content}
                        className="accordion__content"
                        style={{ maxHeight: `${setHeight}` }}
                    >
                        <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                    </div>
                </li>
                <li className="sidebar__item">
                    Сноубординг
                    <i className="fas fa-chevron-down" />
                </li>
                <li className="sidebar__item">
                    Армотизаторы для сноуборда
                    <i className="fas fa-chevron-down" />
                </li>
            </ul>
        </div>
    )
};

export default Accordion;
import "./Accordion.css";
import { useState, useRef } from "react";
import { Link } from 'react-router-dom';

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
        <div className="accordion">
            <div className="item">
                < div className={`titled ${setActive}`} onClick={toggleAccordion}>
                    {props.title}
                    < i className={`fas fa-chevron-down ${setRotate}`} />
                </div >
                <div
                    ref={content}
                    className="sidebar__content"
                    style={{ maxHeight: `${setHeight}` }}
                >
                    <div className="accordion__show">
                        <Link className="accordion__select">СКЕЙТБОРДЫ В СБОРЕ</Link>
                        <Link className="accordion__select">ЛОНГБОРДЫ И КРУИЗЕРЫ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
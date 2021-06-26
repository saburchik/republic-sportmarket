import "./Accordion.css";
import { useState } from "react";
import { Link } from 'react-router-dom';



function Accordion() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)

        // setRotateState(
        //     selected === "show" ? "fa-chevron-down" : "fa-chevron-down rotate"
        // )
    }

    return (
        <div className="accordion">
            {AccordionData.map((item, i) => (
                <div className="item">
                    <div className="titled" onClick={() => toggle(i)}>
                        {item.titled}
                        <i className="fas fa-chevron-down" />
                    </div>
                    <ul className={selected === i ? "sidebar__content show" : "sidebar__content"}>
                        <li>
                            <Link className="accordion__select">{item.categoryOne}</Link>
                        </li>
                        <li>
                            <Link className="accordion__select">{item.categoryTwo}</Link>
                        </li>
                        <li>
                            <Link className="accordion__select">{item.categoryThree}</Link>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

const AccordionData = [
    {
        titled: "СКЕЙТБОРДИНГ",
        categoryOne: "СКЕЙТБОРДЫ В СБОРЕ",
        categoryTwo: "ЛОНГБОРДЫ И КРУИЗЕРЫ",
        categoryThree: "ПОДШИПНИКИ ДЛЯ СКЕЙТА"
    },
    {
        titled: "СНОУБОРДИНГ",
        categoryOne: "СНОУБОРДЫ",
        categoryTwo: "БОТИНКИ ДЛЯ СНОУБОРДА",
        categoryThree: "КРЕПЛЕНИЯ ДЛЯ СНОУБОРДОВ"
    },
    {
        titled: "АКСЕССУАРЫ",
        categoryOne: "БАНДАНЫ",
        categoryTwo: "НАКЛЕЙКИ"
    }
]

export default Accordion;


// import { useState, useRef } from "react";
// import { Link } from 'react-router-dom';
// import "./Accordion.css";

// function Accordion(props) {
//     const [setActive, setActiveState] = useState("");
//     const [setHeight, setHeightState] = useState("0px");
//     const [setRotate, setRotateState] = useState("fa-chevron-down");

//     const content = useRef(null);

//     function toggleAccordion() {
//         setActiveState(setActive === "" ? "active" : "");
//         setHeightState(
//             setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
//         );
//         console.log(content.current.scrollHeight);
//         setRotateState(
//             setActive === "active" ? "fa-chevron-down" : "fa-chevron-down rotate"
//         )
//     }

//     return (
//         <div className="sidebar__wrapper">
//             <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
//                 {props.title}
//                 <i className={`fas fa-chevron-down ${setRotate}`} />
//             </div>
//             <div
//                 ref={content}
//                 className="accordion__content"
//                 style={{ maxHeight: `${setHeight}` }}
//             >
//                 <div className="accordion__text">
//                     <Link className="accordion__select">Skate</Link>
//                 </div>
//                 <div className="accordion__text">
//                     <Link className="accordion__select">Line</Link>
//                 </div>
//                 <div className="accordion__text">
//                     <Link className="accordion__select">Snow</Link>
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Accordion;
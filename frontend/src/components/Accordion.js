// import "./Accordion.css";
// import { useState, useRef } from "react";
// import { Link } from 'react-router-dom';



// function Accordion() {
//     const [selected, setSelected] = useState(null);
//     // const [setActive, setActiveState] = useState("");
//     // const [setHeight, setHeightState] = useState("0px");
//     const [setRotate, setRotateState] = useState("fa-chevron-down");


//     const toggle = () => {
//         if (selected === i) {
//             return setSelected(null)
//         }

//         setRotateState(
//             selected === "active" ? "fa-chevron-down" : "fa-chevron-down rotate"
//         )

//         setSelected(i)
//     }

//     return (
//         <div className="accordion">
//             <div className="item">
//                 < div className="titled" onClick={() => toggle(i)}>
//                     СКЕЙТБОРДИНГ
//                     < i className={`fas fa-chevron-down ${setRotate}`} />
//                 </div >
//                 <div
//                     ref={content}
//                     className="sidebar__content"
//                     style={{ maxHeight: `${setHeight}` }}
//                 >
//                     <Link className="accordion__select">СКЕЙТБОРДЫ В СБОРЕ</Link>
//                     <Link className="accordion__select">ЛОНГБОРДЫ И КРУИЗЕРЫ</Link>
//                 </div>
//                 <div className="item">
//                     < div className="titled" onClick={() => toggle(i)}>
//                         СНОУБОРДИНГ
//                         < i className={`fas fa-chevron-down ${setRotate}`} />
//                     </div >
//                     <div
//                         ref={content}
//                         className="sidebar__content"
//                         style={{ maxHeight: `${setHeight}` }}
//                     >
//                         <Link className="accordion__select">СКЕЙТБОРДЫ В СБОРЕ</Link>
//                         <Link className="accordion__select">ЛОНГБОРДЫ И КРУИЗЕРЫ</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// // const AccordionData = [
// //     {
// //         titled: "СКЕЙТБОРДИНГ",
// //         category: {
// //             first: "СКЕЙТБОРДЫ В СБОРЕ",
// //             second: "ЛОНГБОРДЫ И КРУИЗЕРЫ",
// //             third: "ПОДШИПНИКИ ДЛЯ СКЕЙТА"
// //         }
// //     }
// // ]

// // const AccordionDataSec = [
// //     {
// //         titled: "СНОУБОРДИНГ",
// //         category: {
// //             first: "СНОУБОРДЫ",
// //             second: "БОТИНКИ ДЛЯ СНОУБОРДА",
// //             third: "КРЕПЛЕНИЯ ДЛЯ СНОУБОРДОВ"
// //         }
// //     }
// // ]
// // {
// //     titled: "СНОУБОРДИНГ",
// //     category: {
// //         first: "СНОУБОРДЫ",
// //         second: "БОТИНКИ ДЛЯ СНОУБОРДА",
// //         third: "КРЕПЛЕНИЯ ДЛЯ СНОУБОРДОВ"
// //     }
// // },
// // {
// //     titled: "АКСЕССУАРЫ",
// //     categoryOne: "БАНДАНЫ",
// //     categoryTwo: "НАКЛЕЙКИ",
// //     categoryThree: "ЧАСЫ"
// // }


// // < div className = "titled" onClick = {() => toggle(i)}>
// //     { item.titled }
// //     < i className = {`fas fa-chevron-down ${setRotate}`} />
// //                 </div >

// // {/* <div className={selected === i ? "sidebar__content show" : "sidebar__content"}
// //                     >
// //                         <Link className="accordion__select">{item.categoryOne}</Link>
// //                         <Link className="accordion__select">{item.categoryTwo}</Link>
// //                         <Link className="accordion__select">{item.categoryThree}</Link>
// //                     </div>  */}

// export default Accordion;


// // import { useState, useRef } from "react";
// // import { Link } from 'react-router-dom';
// // import "./Accordion.css";

// // function Accordion(props) {
// //     const [setActive, setActiveState] = useState("");
// //     const [setHeight, setHeightState] = useState("0px");
// //     const [setRotate, setRotateState] = useState("fa-chevron-down");

// //     const content = useRef(null);

// //     function toggleAccordion() {
// //         setActiveState(setActive === "" ? "active" : "");
// //         setHeightState(
// //             setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
// //         );
// //         console.log(content.current.scrollHeight);
// //         setRotateState(
// //             setActive === "active" ? "fa-chevron-down" : "fa-chevron-down rotate"
// //         )
// //     }

// //     return (
// //         <div className="sidebar__wrapper">
// //             <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
// //                 {props.title}
// //                 <i className={`fas fa-chevron-down ${setRotate}`} />
// //             </div>
// //             <div
// //                 ref={content}
// //                 className="accordion__content"
// //                 style={{ maxHeight: `${setHeight}` }}
// //             >
// //                 <div className="accordion__text">
// //                     <Link className="accordion__select">Skate</Link>
// //                 </div>
// //                 <div className="accordion__text">
// //                     <Link className="accordion__select">Line</Link>
// //                 </div>
// //                 <div className="accordion__text">
// //                     <Link className="accordion__select">Snow</Link>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // };

// // export default Accordion;
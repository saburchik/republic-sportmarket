import "./style/Accordion.css";
import { useState, useRef } from "react";

function Accordion({ posts, title }) {
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
                    {title}
                    < i className={`fas fa-chevron-down ${setRotate}`} />
                </div >
                <div
                    ref={content}
                    className="sidebar__content"
                    style={{ maxHeight: `${setHeight}` }}
                >
                    <ul className="accordion__show">
                        {posts.map((post) =>
                            <li className="item__subtitle" key={post.id}>
                                {post.subtitle}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
import "./style/Backdrop.css";
import React from 'react'


const Backdrop = ({ show, click }) => {
    return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
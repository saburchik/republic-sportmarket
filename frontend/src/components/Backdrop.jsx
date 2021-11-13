import React from "react"
import style from "./styles/Backdrop.module.scss"

const Backdrop = ({ show, click }) => show && <div className={style.backdrop} onClick={click} />

export default Backdrop
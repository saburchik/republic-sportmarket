import React from "react"
import s from "./styles/Backdrop.module.scss"

const Backdrop = ({ show, click }) => show && <div className={s.backdrop} onClick={click} />

export default Backdrop
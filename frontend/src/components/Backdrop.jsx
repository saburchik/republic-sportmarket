// == Base:
import React from "react"
// == Styles:
import s from "./styles/Backdrop.module.scss"

const Backdrop = ({ show, click }) => show && <div className={s.backdrop} onClick={click} />

export default Backdrop
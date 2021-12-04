// == Base:
import { Link } from "react-router-dom"
// == Img:
import logo from "./../assets/republic.png"
// == Styles:
import s from "./styles/Logo.module.scss"

const Logo = () => {
    return (
        <Link to="/">
            <img className={s.logo} src={logo} alt="Логотип Республика" />
        </Link>
    )
}

export default Logo
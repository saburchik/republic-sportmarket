// == Base:
import { Link } from "react-router-dom"
// == Img:
import logo from "./../assets/republic.png"
// == Styles:
import styleCom from "../common.module.scss"

const Logo = () => {
    return (
        <Link to="/">
            <img className={styleCom.logo} src={logo} alt="Логотип Республика" />
        </Link>
    )
}

export default Logo
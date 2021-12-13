// == Base:
import { Link } from "react-router-dom"
// == Img:
import logo from "../../assets/republic.png"
import logoWebp from "../../assets/republic.webp"
// == Styles:
import s from "./Logo.module.scss"

const Logo = () => {
    return (
        <Link to="/">
            <picture>
                <source srcset={logoWebp} type="image/webp" />
                <img className={s.logo} src={logo} alt="Логотип Республика" />
            </picture>
        </Link>
    )
}

export default Logo
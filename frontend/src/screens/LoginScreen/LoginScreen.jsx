// == Base:
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
// == Styles:
import style from "./LoginScreen.module.scss"
// == Component:
import Advantages from "../../components/Advantages"

const LoginScreen = () => {
    function ScrollToTop() {
        const { pathname } = useLocation()
        useEffect(() => { window.scrollTo(0, 0) }, [pathname])
        return null
    }
    ScrollToTop()

    const [visible, setVisible] = useState(false)
    let checkVis = visible ? 'text' : 'password'

    let toggleBtn = () => {
        setVisible(prevState => !prevState)
    }

    return (
        <section className={style.intro}>
            <article className={style.inner}>
                <h2 className={style.title}>Личный кабинет</h2>
                <div className={style.dashboard}>
                    <div className={style.login}>
                        <h2 className={style.title + ' ' + style.size_s}>Вход</h2>
                        <div className={style.form}>
                            <div className={style.inner__hide}>
                                <input className={style.input} placeholder="Введите e-mail" />
                                <label className={style.label}>Введите e-mail</label>
                            </div>
                            <div className={style.inner__hide}>
                                <input className={style.input} type={visible ? "text" : "password"} placeholder="Введите пароль" />
                                <label className={style.label} htmlFor="pass">Введите пароль</label>
                                <button className={style.btn__input} onClick={toggleBtn}>
                                    <svg viewBox="0 0 640 512">
                                        <path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z" />
                                    </svg>
                                </button>
                            </div>
                            <Link className={style.password} to="/login">Забыли пароль?</Link>
                            <button className={style.btn}>Войти</button>
                        </div>
                    </div>
                    <div className={style.registration}>
                        <h2 className={style.title + ' ' + style.size_s}>Регистрация</h2>
                        <div className={style.form}>
                            <div className={style.inner__hide}>
                                <input className={style.input} placeholder="Введите имя" />
                                <label className={style.label}>Введите имя</label>
                            </div>
                            <div className={style.inner__hide}>
                                <input className={style.input} placeholder="Введите e-mail" />
                                <label className={style.label}>Введите e-mail</label>
                            </div>
                            <div className={style.inner__hide}>
                                <input className={style.input} type={visible ? "text" : "password"} name="pass" placeholder="Введите пароль" />
                                <label className={style.label} htmlFor="pass">Введите пароль</label>
                                <button className={style.btn__input} onClick={toggleBtn}>
                                    <svg viewBox="0 0 640 512">
                                        <path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z" />
                                    </svg>
                                </button>
                            </div>
                            <div className={style.inner__hide}>
                                <input className={style.input} type={checkVis} name="pass" placeholder="Повторите пароль" />
                                <label className={style.label} htmlFor="pass">Повторите пароль</label>
                                <button className={style.btn__input} onClick={toggleBtn} htmlFor="pass">
                                    <svg viewBox="0 0 640 512">
                                        <path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z" />
                                    </svg>
                                </button>
                            </div>
                            <button className={style.btn}>Регистрироваться</button>
                        </div>
                    </div>
                </div>
            </article>
            <Advantages />
        </section>
    )
}

export default LoginScreen
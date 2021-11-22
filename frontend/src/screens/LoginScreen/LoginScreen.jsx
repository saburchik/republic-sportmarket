import style from "./LoginScreen.module.scss"
import { Link } from "react-router-dom"

const LoginScreen = () => {
    return (
        <div>
            <div className={style.intro}>
                <div className={style.inner}>
                    <h2 className={style.title}>Личный кабинет</h2>
                    <div className={style.dashboard}>
                        <div className={style.login}>
                            <h2 className={style.title + ' ' + style.size_s}>Вход</h2>
                            <div className={style.wrapper}>
                                <form className={style.form}>
                                    <input className={style.input} placeholder="Введите e-mail" />
                                    <input className={style.input} placeholder="Введите пароль" />
                                    <div className={style.password__inner}>
                                        <Link className={style.reset__password} to="/">Забыли пароль?</Link>
                                    </div>
                                    <button className={style.btn}>Войти</button>
                                </form>
                            </div>
                        </div>
                        <div className={style.registration}>
                            <h2 className={style.title + ' ' + style.size_s}>Регистрация</h2>
                            <div className={style.wrapper}>
                                <form className={style.form}>
                                    <input className={style.input} placeholder="Введите имя" />
                                    <input className={style.input} placeholder="Введите e-mail" />
                                    <input className={style.input} placeholder="Введите пароль" />
                                    <input className={style.input} placeholder="Повторите пароль" />
                                    <button className={style.btn}>Регистрироваться</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
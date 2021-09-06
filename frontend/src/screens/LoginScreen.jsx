import './styles/LoginScreen.scss';
import { Link } from 'react-router-dom';

// Components
import Footer from '../components/Footer';

const LoginScreen = () => {
    return (
        <div className="loginscreen">
            <div className="loginscreen__intro">
                <div className="loginscreen__wrapper">
                    <h2 className="title title__size_m">Личный кабинет</h2>
                    <div className="dashboard">
                        <div className="login">
                            <h2 className="title title__size_m">Вход</h2>
                            <div className="login__wrapper">
                                <form className="login__form">
                                    <p className="login__text">Ваша почта
                                        <span>*</span></p>
                                    <input className="input input__loginscreen" placeholder="Введите e-mail" />
                                    <p className="login__text">Ваш пароль
                                        <span>*</span></p>
                                    <input className="input input__loginscreen" placeholder="Введите пароль" />
                                    <div className="password__inner">
                                        <Link className="reset__password">Забыли пароль?</Link>
                                    </div>
                                    <button className="btn btn__login">Войти</button>
                                </form>
                            </div>
                        </div>
                        <div className="registration">
                            <h2 className="title title__size_m">Регистрация</h2>
                            <div className="login__wrapper">
                                <form className="login__form">
                                    <p className="login__text">Ваше имя
                                        <span>*</span></p>
                                    <input className="input input__loginscreen" placeholder="Введите имя" />
                                    <p className="login__text">Ваша почта
                                        <span>*</span></p>
                                    <input className="input input__loginscreen" placeholder="Введите e-mail" />
                                    <p className="login__text">Ваш пароль
                                        <span>*</span></p>
                                    <input className="input input__loginscreen" placeholder="Введите пароль" />
                                    <p className="login__text">Повторите пароль
                                        <span>*</span></p>
                                    <input className="input input__loginscreen" placeholder="Повторите пароль" />
                                    <button className="btn btn__login">Регистрироваться</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default LoginScreen;
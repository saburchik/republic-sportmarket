import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './footer-logo.png';

const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <div className="footer__over">
                            <div className="icon__logo">
                                <Link to="/">
                                    <img className="footer__logo" src={logo} alt="Republic-logo" />
                                </Link>
                            </div>
                            <div className="icon__social">
                            </div>
                        </div>
                        <div className="footer__contacts">
                            <p className="footer__text">
                                Время работы службы поддержки:
                                <br />
                                <span>ПН-ПТ с 09:00 до 21:00</span>
                            </p>
                            <p className="footer__text">
                                Горячая линия:
                                <br />
                                <span>+7 800 5555 585</span>
                            </p>
                            <p className="footer__text">
                                Email:
                                <br />
                                <span>republic-store@gmail.com</span>
                            </p>
                            <a href="/" className="footer__link">Обратная связь</a>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__over">
                            <h5 className="footer__title">Информация</h5>
                        </div>
                        <a href="/" className="footer__link">О компании</a>
                        <a href="/" className="footer__link">Частые вопросы [FAQ]</a>
                        <a href="/" className="footer__link">Работа у нас</a>
                        <a href="/" className="footer__link">Правовая информация</a>
                        <a href="/" className="footer__link">Сотрудничество</a>
                    </div>
                    <div className="footer__item">
                        <div className="footer__over">
                            <h5 className="footer__title">Покупателем</h5>
                        </div>
                        <a href="/" className="footer__link">Условия продаж</a>
                        <a href="/" className="footer__link">Оплата и доставка</a>
                        <a href="/" className="footer__link">Гарантия и возврат</a>
                    </div>
                </div>
                <p className="footer__privacy">2020 – 2021, © ИМ Республика.
                Все права защищены. Информация, размещенная на данной странице, не является публичной офертой.
                    </p>
            </div>
        </div>
    )
}

export default Footer;
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './footer-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__item">
                    <div className="footer__header">
                        <Link to="/">
                            <img className="footer__logo" src={logo} alt="Логотип" />
                        </Link>
                    </div>
                    <div className="footer__contacts">
                        <b className="footer__title">
                            Время работы службы поддержки:
                            <i>ПН-ПТ с 09:00 до 21:00</i>
                        </b>
                        <b className="footer__title">
                            Горячая линия:
                            <i>+7 800 5555 585</i>
                        </b>
                        <b className="footer__title">
                            Email:
                            <i>republic-store@gmail.com</i>
                        </b>
                        <Link href="/" className="footer__link">Обратная связь</Link>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__header">
                        <b className="footer__title">Информация:</b>
                    </div>
                    <div className="links__wrapper">
                        <Link href="/" className="footer__link">О компании</Link>
                        <Link href="/" className="footer__link">Частые вопросы [FAQ]</Link>
                        <Link href="/" className="footer__link">Работа у нас</Link>
                        <Link href="/" className="footer__link">Правовая информация</Link>
                        <Link href="/" className="footer__link">Сотрудничество</Link>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__header">
                        <b className="footer__title">Покупателем:</b>
                    </div>
                    <div className="links__wrapper">
                        <Link className="footer__link" href="/">Условия продаж</Link>
                        <Link className="footer__link" href="/">Оплата и доставка</Link>
                        <Link className="footer__link" href="/">Гарантия и возврат</Link>

                        <div className="links__media">
                            <Link className="footer__icon" href="#" target="_blank"><i className="fab fa-vk" /></Link>
                            <Link className="footer__icon" href="#" target="_blank"><i className="fab fa-youtube" /></Link>
                            <Link className="footer__icon" href="#" target="_blank"><i className="fab fa-telegram" /></Link>
                            <Link className="footer__icon" href="#" target="_blank"><i className="fab fa-instagram" /></Link>
                        </div>
                    </div>
                </div>
                <p className="footer__rights">
                    2020 – 2021, © ИМ Республика.
                    Все права защищены. Информация, размещенная на данной странице,
                    не является публичной офертой.
                </p>
            </div>
        </footer>
    )
}

export default Footer
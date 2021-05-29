import './Footer.css';
import { Link } from 'react-router-dom';
import logo from './footer-logo.png';

const Footer = () => {

    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <div className="footer__header">
                            <Link to="/">
                                <img className="footer__logo" src={logo} alt="Republic-logo" />
                            </Link>
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
                            <Link href="/" className="footer__link">Обратная связь</Link>
                        </div>
                    </div>
                    <div className="footer__item">
                        <div className="footer__header">
                            <h5 className="footer__title">Информация:</h5>
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
                            <h5 className="footer__title">Покупателем:</h5>
                        </div>
                        <div className="links__adaptive">
                            <div className="links__wrapper">
                                <Link className="footer__link" href="/">Условия продаж</Link>
                                <Link className="footer__link" href="/">Оплата и доставка</Link>
                                <Link className="footer__link" href="/">Гарантия и возврат</Link>
                            </div>
                            <div className="social__media">
                                <Link className="footer__icon" href="/"><i className="fab fa-vk" /></Link>
                                <Link className="footer__icon" href="/"><i className="fab fa-youtube" /></Link>
                                <Link className="footer__icon" href="/"><i className="fab fa-telegram" /></Link>
                                <Link className="footer__icon" href="/"><i class="fab fa-instagram" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer__privacy">
                    2020 – 2021, © ИМ Республика.
                    Все права защищены. Информация, размещенная на данной странице,
                    не является публичной офертой.
                </p>
            </div>
        </section>
    )
}

export default Footer;
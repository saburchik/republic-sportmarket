// == Base:
import React from "react"
import { Link } from "react-router-dom"
// == Styles:
import s from "./styles/Footer.module.scss"
// == Component:
import Logo from "../UI/Logo/Logo"

const Footer = () => {
    return (
        <footer className={s.inner}>
            <address className={s.item}>
                <div className={`${s.header} ${s.logo}`}>
                    <Logo />
                </div>
                <div className={s.contacts}>
                    <strong className={s.title}>
                        Время работы службы поддержки:
                        <em>ПН-ПТ с 09:00 до 21:00</em>
                    </strong>
                    <strong className={s.title}>
                        Горячая линия:
                        <a href="tel:88005555585">+7 800 5555 585</a>
                    </strong>
                    <strong className={s.title}>
                        Email:
                        <a href="mailto:the.saburchik@gmail.com">republic.store@gmail.com</a>
                    </strong>
                    <Link to="/" className={s.link}>Обратная связь</Link>
                </div>
            </address>
            <section className={s.item}>
                <div className={s.header}>
                    <h4 className={s.title}>Информация:</h4>
                </div>
                <ul className={s.wrapper}>
                    <li><Link className={s.link} to="/">О компании</Link></li>
                    <li><Link className={s.link} to="/">Частые вопросы [FAQ]</Link></li>
                    <li><Link className={s.link} to="/">Работа у нас</Link></li>
                    <li><Link className={s.link} to="/">Правовая информация</Link></li>
                    <li><Link className={s.link} to="/">Сотрудничество</Link></li>
                </ul>
            </section>
            <section className={s.item}>
                <div className={s.header}>
                    <h4 className={s.title}>Покупателем:</h4>
                </div>
                <ul className={s.wrapper}>
                    <li><Link className={s.link} to="/">Условия продаж</Link></li>
                    <li><Link className={s.link} to="/">Оплата и доставка</Link></li>
                    <li><Link className={s.link} to="/">Гарантия и возврат</Link></li>
                    <li>
                        <ul className={s.media}>
                            <svg display="none">
                                <symbol id="vk-brands" viewBox="0 0 576 512">
                                    <path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z" />
                                </symbol>
                                <symbol id="youtube-brands" viewBox="0 0 576 512">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                </symbol>
                                <symbol id="telegram-brands" viewBox="0 0 496 512">
                                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
                                </symbol>
                                <symbol id="instagram-brands" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </symbol>
                            </svg>
                            <li>
                                <a className={s.icon} href="https://vk.com/saburchik_chsv" rel="noreferrer" target="_blank">
                                    <svg>
                                        <use xlinkHref="#vk-brands" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className={s.icon} href="https://www.youtube.com/" rel="noreferrer" target="_blank">
                                    <svg>
                                        <use xlinkHref="#youtube-brands" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className={s.icon} href="https://t.me/saburchik_chsv" rel="noreferrer" target="_blank">
                                    <svg>
                                        <use xlinkHref="#telegram-brands" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className={s.icon} href="https://www.instagram.com/saburchik_chsv/" rel="noreferrer" target="_blank">
                                    <svg>
                                        <use xlinkHref="#instagram-brands" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <p className={s.rights}>
                2020 – 2021, © ИМ Республика.
                Все права защищены. Информация, размещенная на данной странице, не является публичной офертой.
            </p>
        </footer>
    )
}

export default Footer
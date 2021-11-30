// == Base:
import React from "react"
// == Styles:
import styleCom from "../common.module.scss"
import styleLoc from "./styles/Digest.module.scss"

const Digest = () => {
    return (
        <section>
            <article className={styleLoc.inner}>
                <h2 className={styleCom.title}>Подпишись на наш Дайджест</h2>
                <p className={styleCom.discription}>
                    Подпишитесь на новостную рассылку Республики и будь всегда в курсе всех новостей,
                    распродаж, акций и бонусов только для своих. Обещаем не спамить и не надоедать письмами.
                </p>
                <form>
                    <input className={`${styleCom.input} ${styleCom.digest}`} placeholder="Введите ваш Email" />
                    <button className={styleLoc.btn}>
                        <svg viewBox="0 0 512 512">
                            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                        </svg>
                    </button>
                </form>
            </article>
        </section >
    )
}

export default Digest
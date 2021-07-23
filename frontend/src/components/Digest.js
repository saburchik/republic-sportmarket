import "./Digest.css";

const Digest = () => {
    return (
        <section className="digest">
            <div className="digest__inner">
                <h2 className="title digest__title">Подпишись на наш Дайджест</h2>
                <p className="description digest__description">
                    Подпишитесь на новостную рассылку Республики и будь всегда в курсе всех новостей,
                    распродаж, акций и бонусов только для своих. Обещаем не спамить и не надоедать письмами.
                </p>
                <form>
                    <input className="digest__input" placeholder="Введите ваш Email" />
                    <button className=" digest__btn">
                        <i className="fas fa-envelope"></i>
                    </button>
                </form>
            </div>
        </section>
    )
};

export default Digest
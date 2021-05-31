import "./Digest.css";

const Digest = () => {
    return (
        <div className="digest">
            <div className="container">
                <div className="digest__wrapper">
                    <h3 className="title title__size_m digest__title">Подпишись на наш Дайджест</h3>
                    <p className="description digest__description">
                        Подпишитесь на новостную рассылку Республики и будь всегда в курсе всех новостей,
                        распродаж, акций и бонусов только для своих. Обещаем не спамить и не надоедать письмами.
                    </p>
                    <form>
                        <input className="input digest__input" placeholder="Введите ваш Email" />
                        <button className="input__btn digest__btn"><i className="fas fa-envelope"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Digest;
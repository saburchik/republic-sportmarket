import "./style/Advantages.scss";

const Advantages = () => {
    return (
        <div className="advantages">
            <ul className="advantages__inner">
                <li className="advantage__item">
                    <i className="fas fa-tags"></i>
                    <p className="advantages__text">Скидки при онлайн оплате</p>
                </li>
                <li className="advantage__item">
                    <i className="fas fa-truck"></i>
                    <p className="advantages__text">Быстрая Доставка</p>
                </li>
                <li className="advantage__item">
                    <i className="fas fa-box-open"></i>
                    <p className="advantages__text">Удобный возврат</p>
                </li>
                <li className="advantage__item">
                    <i className="fas fa-balance-scale" />
                    <p className="advantages__text">Гарантия полгода</p>
                </li>
            </ul>
        </div>
    )
}

export default Advantages
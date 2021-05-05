import "./Advantages.css";

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="container">
                <ul className="advantages__inner">
                    <li>
                        <i className="fas fa-tags"></i>
                        <span className="advantages__text">Скидки при онлайн оплате</span>
                    </li>
                    <li>
                        <i className="fas fa-truck"></i>
                        <span className="advantages__text">Быстрая Доставка</span>
                    </li>
                    <li>
                        <i className="fas fa-box-open"></i>
                        <span className="advantages__text">Удобный возврат</span>
                    </li>
                    <li>
                        <i className="fas fa-balance-scale" />
                        <span className="advantages__text">Гарантия полгода</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Advantages;
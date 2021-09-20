import "./styles/Advantages.scss"

const Advantages = () => {
    return (
        <section className="advantages">
            <ul className="advantages-inner">
                <li className="advantage-item">
                    <i className="fas fa-tags"></i>
                    <h2 className="title" >Скидки при онлайн оплате</h2>
                </li>
                <li className="advantage-item">
                    <i className="fas fa-truck"></i>
                    <h2 className="title">Быстрая Доставка</h2>
                </li>
                <li className="advantage-item">
                    <i className="fas fa-box-open"></i>
                    <h2 className="title" >Удобный возврат</h2>
                </li>
                <li className="advantage-item">
                    <i className="fas fa-balance-scale" />
                    <h2 className="title" >Гарантия полгода</h2>
                </li>
            </ul>
        </section>
    )
}

export default Advantages
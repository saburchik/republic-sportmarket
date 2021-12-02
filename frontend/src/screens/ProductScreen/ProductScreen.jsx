// == Base:
import { React, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
// == Actions:
import { getProductDetails } from "../../redux/actions/productActions"
import { addToCart } from "../../redux/actions/cartActions"
// == Styles:
import styleCom from "../../common.module.scss"
import styleLoc from "./ProductScreen.module.scss"
// == Component:
import Advantages from "../../components/Advantages"

const ProductScreen = ({ match, history }) => {
    function ScrollToTop() {
        const { pathname } = useLocation()
        useEffect(() => { window.scrollTo(0, 0) }, [pathname])
        return null
    }
    ScrollToTop()


    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.getProductDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push("/cart")
    }

    // == Settings display: NEW || Sale || Empty;
    const displayStatus = () => {
        const iconStatusColor = [styleCom.status]

        if (product.status === 'NEW') {
            iconStatusColor.push(styleCom.color_green)
        } else if (product.status === ' ') {
            iconStatusColor.push(styleCom.status)
        } else {
            iconStatusColor.push(styleCom.color_red)
        }
        return iconStatusColor.join(' ')
    }

    let isTrue = false
    const displayBtn = () => {
        if (product.countInStock === 0) {
            isTrue = true
        } else {
            return <div className={styleLoc.quantity}>
                {/* <label>Количество:</label> */}
                <select className={styleLoc.select} value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>Кол-во: {x + 1}</option>
                    ))}
                </select>
            </div>
        }
    }

    let disabledBackdrop = () => {
        if (product.countInStock === 0) {
            return { background: '#d0d0d0', color: '#9a9a9a', border: '1px solid #9a9a9a' }
        }
    }

    const alertUser = () => {
        alert('В разработке.')
    }

    return (
        <section>
            {loading ? <div className={styleCom.loading}><h2>Загрузка...</h2></div>
                : error
                    ? <h2>{error}</h2> : (
                        <div>
                            <Advantages />
                            <section className={styleLoc.inner}>
                                <div className={styleLoc.photo}>
                                    <span className={displayStatus()}>{product.status}</span>
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>

                                <article className={styleLoc.information}>
                                    <header>
                                        <h3 className={styleCom.title} style={{ textAlign: 'left' }}>{product.name}</h3>
                                        <p className={styleCom.price}>
                                            {product.price} ₽
                                            <del className={product.oldPrice === 0
                                                ? `${styleCom.oldprice} ${styleCom.none}`
                                                : styleCom.oldprice
                                            }>{product.oldPrice} ₽</del>
                                        </p>
                                    </header>

                                    <div className={styleLoc.contains}>
                                        <p className={styleLoc.article}>артикул: <strong>{product.article}</strong></p>
                                        <p className={styleLoc.description}>
                                            <strong>Описание:</strong>
                                            {product.description}
                                        </p>
                                        <button className={styleLoc.btn} onClick={alertUser}>Размераня сетка</button>
                                        <div className={styleLoc.status}>
                                            <p className={styleLoc.article}>статус:
                                                <strong> {product.countInStock > 0 ? "В наличии" : "Нет в наличии"}</strong>
                                            </p>
                                            {displayBtn()}
                                        </div>
                                    </div>

                                    <button
                                        className={`${styleLoc.btn} ${styleLoc.color}`}
                                        type="button"
                                        onClick={addToCartHandler}
                                        disabled={isTrue}
                                        style={disabledBackdrop()}
                                    >В корзину</button>
                                </article>
                            </section>
                            <article className={styleLoc.reviews}>
                                <h3 className={styleCom.title}>Отзывы</h3>
                                <div className={styleLoc.client}>
                                    <strong className={`${styleCom.title} ${styleCom.size_s}`}>Saburchik:</strong>
                                    <p className={`${styleLoc.description} ${styleLoc.description__text}`}>Отличный магазин, доставка до Красноярска как и заявлена 4 дня, постоянно есть обратная связь. Доска без косяков, что хотел, то и получил, приятно когда работают профессионалы.</p>
                                    <strong className={styleLoc.date}>02.03.2021 | 19:42</strong>
                                </div>
                                <p className={styleLoc.alert}>
                                    Отзывы могут оставлять только <Link className={styleLoc.link} to="/login">зарегистрированные</Link> пользователи,<br />
                                    <Link className={styleLoc.link} to="/login">авторизоваться и оставить отзыв</Link>.
                                </p>
                            </article>
                        </div>
                    )
            }
        </section >
    )
}

export default ProductScreen
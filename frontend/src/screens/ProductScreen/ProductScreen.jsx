// == Base:
import { React, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
// == Actions:
import { getProductDetails } from "../../redux/actions/productActions"
import { addToCart } from "../../redux/actions/cartActions"
// == Styles:
import s from "./ProductScreen.module.scss"
// == Component:
import Advantages from "../../components/Advantages"
import Comment from "../../components/Comment"

const ProductScreen = ({ match, history }) => {
    // == Scroll to up when switching to CartScreen:
    function ScrollToTop() {
        const { pathname } = useLocation();
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

    // == Settings display icon: NEW || Sale || Empty;
    const displayBadge = () => {
        const setBadge = [s.badge]

        if (product.isBadge === 'NEW') {
            setBadge.push(s.color_green)
        } else if (product.isBadge === ' ') {
            setBadge.push(s.badge)
        } else {
            setBadge.push(s.color_red)
        }
        return setBadge.join(' ')
    }

    let isDisabled = false
    const displayBtn = () => {
        if (product.countInStock === 0) {
            isDisabled = true
        } else {
            return (
                <div className={s.quantity}>
                    <h6 className={s.subtitle}>Количество:</h6>
                    <select className={s.select} value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                    </select>
                </div>
            )
        }
    }

    let disabledBackdrop = () => {
        if (product.countInStock === 0) {
            return { background: '#d0d0d0', color: '#9a9a9a', border: '1px solid #9a9a9a' }
        }
    }

    const alertUser = () => {
        alert('В разработке')
    }

    return loading ? <div className={s.loading}><h3>Загрузка...</h3></div> : error
        ? <h3>{error}</h3> : (
            <section>
                <Advantages />
                <div className={s.inner}>
                    <div className={s.photo}>
                        <img src={product.imageUrl} alt={product.name} />
                        <span className={displayBadge()}>{product.isBadge}</span>
                    </div>

                    <article className={s.content}>
                        <header>
                            <h3 className={s.title}>{product.name}</h3>
                            <p className={s.price}>
                                {product.price} ₽
                                <del className={product.oldPrice === 0
                                    ? `${s.oldprice} ${s.none}`
                                    : s.oldprice
                                }>{product.oldPrice} ₽</del>
                            </p>
                        </header>

                        <div className={s.contains}>
                            <h6 className={s.subtitle}>Артикул: <strong>{product.article}</strong></h6>
                            <p className={s.description}>
                                <strong>Описание:</strong>
                                {product.description}
                            </p>
                            <button className={s.btn} onClick={alertUser}>Размераня сетка</button>
                            <div className={s.status}>
                                <h6 className={s.subtitle}>Cтатус:
                                    <strong> {product.countInStock > 0 ? "В наличии" : "Нет в наличии"}</strong>
                                </h6>
                                {displayBtn()}
                            </div>
                        </div>

                        <button className={`${s.btn} ${s.green}`}
                            type="button"
                            onClick={addToCartHandler}
                            disabled={isDisabled}
                            style={disabledBackdrop()}
                        >В корзину</button>
                    </article>
                </div>
                <Comment />
            </section >
        )
}

export default ProductScreen
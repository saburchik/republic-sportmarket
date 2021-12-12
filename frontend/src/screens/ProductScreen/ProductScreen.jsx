// == Base:
import { React, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
// == Actions:
import { getProductDetails } from "../../redux/actions/productActions"
// == Styles:
import s from "./ProductScreen.module.scss"
// == Components:
import Advantages from "../../components/Advantages"
import Comment from "../../components/Comment"
import Content from "./Content/Content"

const ProductScreen = ({ match, history }) => {
    // == Scroll to up when switching to CartScreen:
    function ScrollToTop() {
        const { pathname } = useLocation();
        useEffect(() => { window.scrollTo(0, 0) }, [pathname])
        return null
    }
    ScrollToTop()

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.getProductDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

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

    return loading ? <div className={s.loading}><h3>Загрузка...</h3></div>
        : error
            ? <h3>{error}</h3> : (
                <section>
                    <Advantages />
                    <main className={s.inner}>
                        <div className={s.photo}>
                            <img src={product.imageUrl} alt={product.name} />
                            <span className={displayBadge()}>{product.isBadge}</span>
                        </div>

                        <Content product={product} history={history} />
                    </main>
                    <Comment />
                </section >
            )
}

export default ProductScreen
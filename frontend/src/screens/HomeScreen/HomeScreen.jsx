/* eslint-disable no-unused-vars */
import "./Homescreen.scss"
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// Components
import IntroSlider from "../../components/IntroSlider"
import Product from "../../components/Product"
import Advantages from "../../components/Advantages"
import Accordion from "../../components/Accordion"
import Footer from "../../components/Footer"
import Digest from "../../components/Digest"
import Feedback from "../../components/Feedback"

// Actions
import { getProducts as listProducts } from "../../redux/actions/productActions"

const HomeScreen = (props) => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    // Drawing Accordion and sent the data about title/subtitleList
    let Accordions = props.state.Categories.map(a => <Accordion title={a.title} subtitleList={a.subtitleList} key={a.id} />)

    let DrawsProducts = () => {
        return (loading ? (
            <h3 className="title title__size-sl">Loading...</h3>
        ) : error ? (
            <h3 className="title title__size-sl">{error}</h3>
        ) : (
            products.map((product) => <Product
                key={product.id}
                productId={product._id}
                name={product.name}
                status={product.status}
                price={product.price}
                oldPrice={product.oldPrice}
                description={product.description}
                imageUrl={product.imageUrl}
            />)
        )
        )
    }


    return (
        <main className="homescreen">
            <IntroSlider />
            <Advantages />
            <article style={{ padding: "1rem 0 5rem" }}>
                <h2 className="homescreen__title">Ассортимент</h2>
                <section className="homescreen__catalog">
                    <article className="homescreen__categories">
                        <h3 className="title title__size-sl">Категории:</h3>
                        {Accordions}
                    </article>
                    <ul className="catalog">
                        <svg display="none">
                            <symbol id="play-solid" viewBox="0 0 448 512">
                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                            </symbol>
                        </svg>
                        {DrawsProducts()}
                    </ul>
                </section>
            </article>
            <Feedback />
            <Digest />
            <Footer />
        </main >
    )
}

export default HomeScreen
/* eslint-disable no-unused-vars */
import "./styles/HomeScreen.scss"
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Components
import IntroSlider from "../components/IntroSlider"
import Product from "../components/Product"
import Advantages from "../components/Advantages"
import Accordion from "../components/Accordion"
import Footer from "../components/Footer"
import Digest from "../components/Digest"
import Feedback from "../components/Feedback"

// Actions
import { getProducts as listProducts } from "../redux/actions/productActions"

const HomeScreen = () => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const [skate] = useState([
        { subtitle: 'Лонгборды и круизеры' },
        { subtitle: 'Скейтборды в сборе' },
        { subtitle: 'Подшипники для скейта' }
    ])
    const [scooter] = useState([
        { subtitle: 'Самокаты в сборе' },
        { subtitle: 'Вилки для кикскутеров и самокатов' },
        { subtitle: 'Рули для самокатов' },
        { subtitle: 'Деки для самокатов' },
        { subtitle: 'Подшипники' }
    ])
    const [outfit] = useState([
        { subtitle: 'Очки' },
        { subtitle: 'Банданы' },
        { subtitle: 'Часы' },
    ])

    return (
        <main className="homescreen">
            <IntroSlider />
            <Advantages />
            <article style={{ padding: "1rem 0 5rem" }}>
                <h2 className="title title-size-sl">Ассортимент</h2>
                <section className="catalog">
                    <article className="catalog-categories">
                        <h3 className="title title-size-sl">Категории:</h3>
                        <Accordion category={skate} title="Скейтборды" />
                        <Accordion category={scooter} title="Самокаты" />
                        <Accordion category={outfit} title="Аксессуары" />
                    </article>
                    <ul className="catalog-products">
                        <svg display="none">
                            <symbol id="play-solid" viewBox="0 0 448 512">
                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                            </symbol>
                        </svg>

                        {loading ? (
                            <h3 className="title title-size-sl">Loading...</h3>
                        ) : error ? (
                            <h3 className="title title-size-sl">{error}</h3>
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
                        )}
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
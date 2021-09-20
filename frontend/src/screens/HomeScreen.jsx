/* eslint-disable no-unused-vars */
import './styles/HomeScreen.scss'
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

// Components
import IntroSlider from '../components/IntroSlider'
import Product from '../components/Product'
import Advantages from '../components/Advantages'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import Digest from '../components/Digest'
import Feedback from '../components/Feedback'

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

    // const outfit = ['Hera should be subtitle']


    return (
        <main className="homescreen">
            <IntroSlider />
            <Advantages />
            <article className="catalog">
                <div className="catalog-inner">
                    <h2 className="title title-size-sl">Ассортимент</h2>
                    <div className="catalog-body">
                        <div className="catalog-categories">
                            <h3 className="title title-size-sl">Категории:</h3>
                            <Accordion category={skate} title='Скейтборды' />
                            <Accordion category={scooter} title='Самокаты' />
                            <Accordion category={outfit} title='Аксессуары' />
                        </div>
                        <section className="catalog-products">
                            {loading ? (
                                <h3 className="title title-size-sl">Loading...</h3>
                            ) : error ? (
                                <h3 className="title title-size-sl">{error}</h3>
                            ) : (
                                products.map((product) => <Product
                                    key={product.id}
                                    productId={product._id}
                                    category={product.category}
                                    name={product.name}
                                    status={product.status}
                                    price={product.price}
                                    oldPrice={product.oldPrice}
                                    description={product.description}
                                    imageUrl={product.imageUrl}
                                />)
                            )}
                        </section>
                    </div>
                </div>
            </article>
            <Feedback />
            <Digest />
            <Footer />
        </main >
    )
}

export default HomeScreen
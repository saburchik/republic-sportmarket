/* eslint-disable no-unused-vars */
import './style/HomeScreen';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SliderHome from 'react-slick';
import "slick-carousel/slick/slick.css";

// Components
import Product from '../components/Product';
import Advantages from '../components/Advantages';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Digest from '../components/Digest';
import Feedback from '../components/Feedback';

import Slid from '../assets/background';
import Slid2 from '../assets/background2';




// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const [skate, setSkate] = useState([
        { subtitle: 'Лонгборды и круизеры' },
        { subtitle: 'Скейтборды в сборе' },
        { subtitle: 'Подшипники для скейта' }
    ])
    const [scooter, setScooter] = useState([
        { subtitle: 'Самокаты в сборе' },
        { subtitle: 'Вилки для кикскутеров и самокатов' },
        { subtitle: 'Рули для самокатов' },
        { subtitle: 'Деки для самокатов' },
        { subtitle: 'Подшипники' }
    ])
    const [outfit, setOutfit] = useState([
        { subtitle: 'Очки' },
        { subtitle: 'Банданы' },
        { subtitle: 'Часы' },
    ])

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dotsClass: 'slick-dots',
        useCSS: true,
    }


    return (
        <main className="homescreen">
            <header className="homescreen__header">
                <SliderHome className="home__contains" {...settings}>
                    <div className="home__item">
                        <img className="slider__home" src={Slid} alt="Отзывы" />
                        <div className="slider-box">
                            <p className="slider-text">Отдыхай В
                                <span>Движении</span>
                            </p>
                        </div>
                    </div>

                    <div className="home__item">
                        <img className="slider__home" src={Slid2} alt="Отзывы" />
                    </div>
                </SliderHome>
            </header>

            <Advantages />
            <article className="catalog">
                <div className="catalog__inner">
                    <h2 className="title catalog__title">Ассортимент</h2>
                    <div className="catalog__main">
                        <div className="categories">
                            <h3 className="title categories__title">Категории:</h3>

                            <Accordion posts={skate} title='Скейтборды' />
                            <Accordion posts={scooter} title='Самокаты' />
                            <Accordion posts={outfit} title='Аксессуары' />
                        </div>

                        <section className="catalog__products">
                            {loading ? (
                                <h1 className="title">Loading...</h1>
                            ) : error ? (
                                <h2 className="title">{error}</h2>
                            ) : (
                                products.map((product) => <Product
                                    key={product._id}
                                    productId={product._id}
                                    category={product.category}
                                    name={product.name}
                                    status={product.status}
                                    price={product.price}
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
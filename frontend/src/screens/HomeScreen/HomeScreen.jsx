import "./Homescreen.scss"
import { React, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// Components
import IntroSlider from "../../components/IntroSlider/IntroSlider"
import Advantages from "../../components/Advantages"
import Accordion from "../../components/Accordion"
import Product from "../../components/Product"
import Feedback from "../../components/Feedback"
// Actions
import { getProducts as listProducts } from "../../redux/actions/productActions"

const HomeScreen = (props) => {
    const dispatch = useDispatch()
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts
    useEffect(() => dispatch(listProducts()), [dispatch])

    // Drawing accordion titles
    const accordions = props.state.Categories.map(a => <Accordion key={a.id} title={a.title} subtitles={a.subtitles} />)

    // Loading, then checking for errors and finally drawing product cards
    const drawsProducts = () => loading ? <h3 className="homescreen__title">Loading...</h3>
        : error
            ? <h3 className="homescreen__title">{error}</h3>
            : products.map(product => <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                status={product.status}
                price={product.price}
                oldPrice={product.oldPrice}
                description={product.description}
                imageUrl={product.imageUrl}
            />)

    return (
        <main>
            <IntroSlider state={props.state} />
            <Advantages />
            <article className="homescreen__inner">
                <h2 className="homescreen__title">Ассортимент</h2>
                <section className="homescreen__product" >
                    <div className="homescreen__categories" >
                        <h3 className="homescreen__title size_s">Категории:</h3>
                        <svg display="none">
                            <symbol id="chevron-down" viewBox="0 0 448 512">
                                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                            </symbol>
                        </svg>
                        <ul className="homescreen__accordion">
                            {accordions}
                        </ul>
                    </div>
                    <ul className="homescreen__cards">
                        <svg display="none">
                            <symbol id="play-solid" viewBox="0 0 448 512">
                                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                            </symbol>
                        </svg>
                        {drawsProducts()}
                    </ul>
                </section>
            </article>
            <Feedback />
        </main >
    )
}

export default HomeScreen
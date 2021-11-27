// == Base:
import { React, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// == Actions:
import { getProducts as listProducts } from "../../redux/actions/productActions"
// == Styles:
import styleCom from "../../common.module.scss"
import styleLoc from "./Homescreen.module.scss"
// == Components:
import IntroSlider from "../../components/Sliders/IntroSlider"
import Advantages from "../../components/Advantages"
import Accordion from "../../components/Accordion"
import Product from "../../components/Product"
import Feedback from "../../components/Sliders/Feedback"

const HomeScreen = (props) => {
    const dispatch = useDispatch()
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts
    useEffect(() => dispatch(listProducts()), [dispatch])

    //-- Drawing accordion titles --<
    const setAccordions = props.state.Categories.map(a => <Accordion key={a.id} title={a.title} subtitles={a.subtitles} />)

    const setTitle = `${styleCom.title} ${styleCom.size_s}`

    //-- Loading, then checking for errors and finally drawing product cards --<
    const drawsProducts = () => loading
        ? <h3 className={setTitle}>Loading...</h3>
        : error
            ? <h3 className={setTitle}>{error}</h3>
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
            <article className={styleLoc.inner}>
                <h2 className={styleCom.title}>Ассортимент</h2>
                <section className={styleLoc.wrapper}>
                    <section className={styleLoc.categories}>
                        <h3 className={setTitle}>Категории:</h3>
                        <ul className={styleLoc.accordion}>
                            {setAccordions}
                        </ul>
                    </section>
                    <ul className={styleLoc.cards}>
                        {drawsProducts()}
                    </ul>
                </section>
            </article>
            <Feedback state={props.state} />
        </main >
    )
}

export default HomeScreen
// == Base:
import { React, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// == Actions:
import { getProducts as listProducts } from "../../redux/actions/productActions"
// == Styles:
import styleCom from "../../common.module.scss"
import styleLoc from "./Homescreen.module.scss"
// == Components:
import Intro from "../../components/Sliders/Intro"
import Advantages from "../../components/Advantages"
import Accordion from "../../components/Accordion"
import Product from "../../components/Product"
import Feedback from "../../components/Sliders/Feedback"

const HomeScreen = (props) => {
    const dispatch = useDispatch()
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts
    useEffect(() => dispatch(listProducts()), [dispatch])

    // == Drawing accordion titles:
    const setAccordions = props.state.Categories.map(a => <Accordion key={a.id} title={a.title} subtitles={a.subtitles} />)

    // == Settings styles for title:
    const setTitle = `${styleCom.title} ${styleCom.size_m}`

    // == Loading, then checking for errors and finally drawing product cards:
    const drawsProducts = () => loading
        ? <div className={styleCom.loading}><h3>Загрузка...</h3></div>
        : error
            ? <h3 className={setTitle}>{error}</h3>
            : products.map(product => <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                isBadge={product.isBadge}
                price={product.price}
                oldPrice={product.oldPrice}
                description={product.description}
                imageUrl={product.imageUrl}
            />)

    return (
        <main>
            <Intro state={props.state} />
            <Advantages />
            <article className={styleLoc.inner}>
                <h2 className={`${styleCom.title} ${styleCom.home}`}>Ассортимент</h2>
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
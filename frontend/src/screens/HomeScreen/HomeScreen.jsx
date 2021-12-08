// == Base:
import { React, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// == Actions:
import { getProducts as listProducts } from "../../redux/actions/productActions"
// == Styles:
import s from "./Homescreen.module.scss"
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
    const setTitle = s.subtitle

    // == Loading, then checking for errors and finally drawing product cards:
    const drawsProducts = () => loading
        ? <div className={s.loading}><h3>Загрузка...</h3></div>
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
            <article className={s.inner}>
                <h2 className={s.title}>Ассортимент</h2>
                <section className={s.wrapper}>
                    <section className={s.categories}>
                        <h3 className={setTitle}>Категории:</h3>
                        <ul className={s.accordion}>
                            {setAccordions}
                        </ul>
                    </section>
                    <ul className={s.cards}>
                        {drawsProducts()}
                    </ul>
                </section>
            </article>
            <Feedback state={props.state} />
        </main >
    )
}

export default HomeScreen
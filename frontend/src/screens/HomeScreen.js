import './HomeScreen.css';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from '../components/Product';
import Advantages from '../components/Advantages';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Digest from '../components/Digest';
import Feedback from '../components/Feedback';


// Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch()

    const getProducts = useSelector((state) => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <main className="homescreen">
            <header className="homescreen__header">
                <h1 className="homescreen__title">
                    Отдыхай в
                    <span>движении</span>
                </h1>
            </header>

            <Advantages />
            <article className="catalog">
                <div className="catalog__inner">
                    <h2 className="title catalog__title">Ассортимент</h2>
                    <div className="catalog__main">
                        <div className="categories">
                            <h3 className="title categories__title">Категории:</h3>

                            <Accordion title="Скейтборды" />
                            <Accordion title="Самокаты" />
                            <Accordion title="Аксессуары" />

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
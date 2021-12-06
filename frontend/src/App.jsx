// == Base:
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useLocation } from "react-router-dom"
// == Styles:
import './common.module.scss'
// == Screens:
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import ProductScreen from "./screens/ProductScreen/ProductScreen"
import CartScreen from "./screens/CartScreen/CartScreen"
import LoginScreen from "./screens/LoginScreen/LoginScreen"
// == Components:
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
import Digest from './components/Digest'
import Footer from './components/Footer'

function App(props) {
  const [sideToggle, setSideToggle] = useState(false)

  // == Used in: CartScreen |
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])
    return null
  }

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        <Route exact path="/" render={() => <HomeScreen state={props.state} />} />
        {/* <Route exact path="/product/:id" component={ProductScreen} /> */}
        <Route exact path="/product/:id" render={i =>
          <ProductScreen match={i.match} history={i.history} />} />

        <Route exact path="/cart" render={() => <CartScreen ScrollToTop={ScrollToTop} />} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
      <Digest />
      <Footer />
    </Router>
  )
}

export default App

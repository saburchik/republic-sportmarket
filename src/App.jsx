/* eslint-disable no-unused-vars */
import { hot } from 'react-hot-loader/root';
import './styles.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Screens
import HomeScreen from "./screens/HomeScreen.jsx"
import ProductScreen from "./screens/ProductScreen.jsx"
import CartScreen from "./screens/CartScreen.jsx"
import LoginScreen from "./screens/LoginScreen.jsx"

// Components
import Navbar from './components/Navbar.jsx'
import Backdrop from './components/Backdrop.jsx'
import SideDrawer from './components/SideDrawer.jsx'

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  )
}

export default hot(App);

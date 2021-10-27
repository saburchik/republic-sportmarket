import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Screens
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import ProductScreen from "./screens/ProductScreen/ProductScreen"
import CartScreen from "./screens/CartScreen/CartScreen"
import LoginScreen from "./screens/LoginScreen/LoginScreen"

// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

function App(props) {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        {/* <Route exact path="/" component={HomeScreen} /> */}
        <Route exact path="/" render={() => <HomeScreen state={props.state} />} />
        <Route exact path="/product/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  )
}

export default App

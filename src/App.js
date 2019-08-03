import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Navbar from './components/Navbar'
import Details from './components/Details'
import Cart from './components/Cart'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Reservation from './components/Reservation'
import Login from './components/Login'
import About from './components/about'
import OrderOnline from './components/OrderOnline'
import Default from './components/Default'
import ProductList from './components/ProductList'
// var cors = require('cors')
// var app = express();

// app.use(cors())

// app.get('/products/:id', function (req, res, next) {
//   res.json({ msg: 'This is CORS-enabled for all origins!' })
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/orderonline' component={ProductList} />
          <Route path='/reservation' component={Reservation} />
          <Route path='/contactus' component={ContactUs} />
          <Route path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/detais' component={Details} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App

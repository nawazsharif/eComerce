import React, { Component } from 'react'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'
import SlideView from './Slider/SlideView'
// import ProductList from './ProductList'

export default class Home extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <SlideView />
      </div>
    )
  }
}

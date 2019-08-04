import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'

// import Title from './Title'
// import {storeProducts} from "../data";
// import {ProductConsumer} from "../context"

class ProductList extends Component {
  state = {
    post: []
  }
  componentDidMount () {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(result => {
        this.setState({ products: result.data })
      })
      .catch(err => {})
  }
  //   state = {
  //     products: storeProducts
  //   }
  render () {
    const products = this.state.products.map(product => {
      return <Product key={product.id} title={product.title} />
    })
    return (
      <div>
        <section className='Product'>{products}</section>
      </div>
    )
  }
}
export default ProductList
import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    handleDetails: detailProduct
  }
  handleDetails = () => {
    console.log('handel details')
  }
  addToCart = () => {
    console.log('add to cart')
  }
  render () {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }

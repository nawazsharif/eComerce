import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: []
  }
  componentDidMount () {
    this.setProducts()
  }
  setProducts = () => {
    let tempProducts = []
    storeProducts.forEach(item => {
      const singleItem = { ...item }
      tempProducts = [...tempProducts, singleItem]
    })
    this.setState(() => {
      return { products: tempProducts }
    })
  }
  getItem = id => {
    const product = this.state.products.find(item => item.id === id)
    return product
  }
  handleDetails = id => {
    const product = this.getItem(id)
    this.setState(() => {
      return { detailProduct: product }
    })
  }
  addToCart = id => {
    let tempProducts = [this.state.products]
    // const index = tempProducts.indexOf(this.getItem(id))
    // const product = tempProducts[index]
    const product = this.getItem(id)
    // console.log(product)
    product.inCart = true
    product.count = 1
    const price = product.price
    product.total = price
    this.setState(
      () => {
        return { product: tempProducts, cart: [...this.state.cart, product] }
      },
      () => {
        console.log(this.state)
      }
    )
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

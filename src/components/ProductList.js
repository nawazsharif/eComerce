import React, { Component } from 'react'
import axios from 'axios'

// import Title from './Title'
// import {storeProducts} from "../data";
// import {ProductConsumer} from "../context"

class ProductList extends Component {
  componentDidMount () {
    axios
      .get('http://192.168.100.4/test-api/allproducts.php')
      .then(responce => {
        console.log(responce)
      })
      .catch(err => {})
  }
  //   state = {
  //     products: storeProducts
  //   }
  render () {
    return (
      //   <React.Fragment>
      //       <div className="container">
      //           <Title name="Products" title="Our" />
      //           <div className="row">
      //               <ProductConsumer >
      //                   {hello=>{
      //                   return <h1>{hello}</h1>
      //                   }}
      //               </ProductConsumer >
      //           </div>
      //       </div>
      //   </React.Fragment>
      <h3>Our productList</h3>
    )
  }
}
export default ProductList

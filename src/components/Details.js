import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
export default class Details extends Component {
  render () {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            title,
            info,
            img,
            price,
            inCart
          } = value.detailProduct
          return (
            <div className='container pt-5'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={img} alt='product' />
                </div>
                <div className='col-md-8'>
                  <h2>{title}</h2>
                  <h4>Made By: {company}</h4>
                  <p>{price}</p>
                  <span>Some info </span>
                  <p>{info}</p>
                  <Link to='/order-online' className='btn btn-info'>
                    Back
                  </Link>
                  <Link to='/cart' className='btn btn-warning'>
                    add to cart
                  </Link>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

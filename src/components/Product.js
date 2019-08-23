import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
export default class Product extends Component {
  render () {
    const { id, title, img, price, inCart } = this.props.product
    return (
      <div className='productwrapper mb-4 col-9 col-md-6 mx-auto col-lg-3'>
        <div className='card'>
          <ProductConsumer>
            {value => (
              <div
                className='img-container p-5'
                onClick={() => {
                  value.handleDetails(id)
                }}
              >
                <Link to='/details'>
                  <img src={img} alt='product' className='card-img-top' />
                </Link>
                <button
                  className='cart-btn'
                  disabled={!!inCart}
                  onClick={() => {
                    value.addToCart(id)
                  }}
                >
                  {inCart ? (
                    <p className='mb-0 text-capitalized' disabled>
                      {''}
                      in Cart
                    </p>
                  ) : (
                    <i className='fa fa-cart-plus' />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'> {title}</p>
            <h5 className='number mb-0'>
              {' '}
              <span className='mr-1'>${price}</span>
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

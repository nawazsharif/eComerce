import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SlideView extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src='https://demo-react-eco2.herokuapp.com/images/banner-cover-pc.jpg'
              alt='1'
            />
          </div>
          <div>
            <img
              src='https://demo-react-eco2.herokuapp.com/images/banner-cover-pc.jpg'
              alt='2'
            />
          </div>
          <div>
            <img
              src='https://demo-react-eco2.herokuapp.com/images/banner-cover-pc.jpg'
              alt='3'
            />
          </div>
          <div>
            <img
              src='https://demo-react-eco2.herokuapp.com/images/banner-cover-pc.jpg'
              alt='4'
            />
          </div>
        </Slider>
      </div>
    )
  }
}

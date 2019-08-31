import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../components/Sliders/slider-animation.css'
import { Content } from '../data'

export default class componentName extends Component {
  render () {
    return (
      <Slider className='slider-wrapper'>
        {Content.map((item, index) => (
          <div
            key={index}
            className='slider-content'
            style={{
              background: `url('${item.image}') no-repeat center center`
            }}
          >
            <div className='inner'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            {/* <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section> */}
          </div>
        ))}
      </Slider>
    )
  }
}

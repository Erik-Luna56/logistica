import React, { Component} from 'react';

import Carousel from 'react-bootstrap/Carousel';


import Image1 from '../../AssetsImg/img01.jpg';
import Image2 from '../../AssetsImg/img02.jpg';
import Image3 from '../../AssetsImg/img03.jpg';

import Styles from './index.module.css';

class Slider extends Component {
    render(){
        return (
            <Carousel className="slider">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default Slider;
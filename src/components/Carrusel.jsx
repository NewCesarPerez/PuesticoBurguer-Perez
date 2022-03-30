import React from 'react'
import imgCarouselOne from '../imagenes/imgCarousel_One(01).jpg'
import imgCarouselTwo from '../imagenes/imgCarousel_Three(01).jpg'
import imgCarouselThree from '../imagenes/imgCarousel_Two(01).jpg'
import { Carousel } from 'react-bootstrap'

const Carrusel = () => {
  return (
<div>
<Carousel >
  <Carousel.Item >
    <img
      className="d-flex w-100 m-auto"
      src={imgCarouselOne}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block h-50 w-100 m-auto"
      src={imgCarouselTwo}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-auto"
      src={imgCarouselThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
}

export default Carrusel
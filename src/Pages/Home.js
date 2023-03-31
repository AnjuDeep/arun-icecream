import React from 'react'
import '../Css/homeStyle.css'
import { Carousel } from 'react-bootstrap'
import BarsBtn from '../Component/Products/BarsBtn'
import IbarMiniBtn from '../Component/Products/IbarMiniBtn'
import IconeBtn from '../Component/Products/IconeBtn'

const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://arunicecreams.in/images/home/Arun-Website-Home-Page.jpg"
          alt="First slide"
        />
      <BarsBtn/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://arunicecreams.in/images/home/iCone-Banner.jpg"
          alt="Second slide"
        />
      <IconeBtn/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://arunicecreams.in/images/home/ibar-mini-new.jpg"
          alt="Third slide"
        />
       <IbarMiniBtn/>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Home
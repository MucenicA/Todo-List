import React from 'react';
import Slider from "react-slick";
import { ProductPreview } from './ProductPreview';

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
      var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4
      };


const dummy = [
    "https://res.cloudinary.com/durnpgzis/image/upload/v1623504595/atlink.common/kelly-sikkema-BIbZb1Zo-hE-unsplash_c2kyga.jpg",
    "https://res.cloudinary.com/durnpgzis/image/upload/v1616075998/atlink.common/braden-collum-9HI8UJMSdZA-unsplash_mr7wbe.jpg",
    "https://res.cloudinary.com/durnpgzis/image/upload/v1616075997/atlink.common/emiliano-vittoriosi-OFismyezPnY-unsplash_eginrf.jpg",
    "https://res.cloudinary.com/durnpgzis/image/upload/v1616075997/atlink.common/sam-mathews-wZjJxOx8FPI-unsplash_fa352u.jpg",
    "https://res.cloudinary.com/durnpgzis/image/upload/v1616075997/atlink.common/sam-mathews-wZjJxOx8FPI-unsplash_fa352u.jpg"
];
const dummy2 = [
    {
        id: 0,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 1,
        source: "https://n.nordstrommedia.com/id/sr3/f0f6bd13-227d-42e7-9434-a2039321662b.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "pantaloni",
        brand: "gucci",
        price: "200 RON",
      },
      {
        id: 2,
        source: "https://n.nordstrommedia.com/id/sr3/d3a814e0-9dc0-4230-926c-76f783a5d14e.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "alti pantaloni",
        brand: "gucci",
        price: "300 RON",
      },
      {
        id: 3,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 4,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 5,
        source: "https://n.nordstrommedia.com/id/sr3/f0f6bd13-227d-42e7-9434-a2039321662b.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "pantaloni",
        brand: "gucci",
        price: "200 RON",
      },
      {
        id: 6,
        source: "https://n.nordstrommedia.com/id/sr3/d3a814e0-9dc0-4230-926c-76f783a5d14e.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "alti pantaloni",
        brand: "gucci",
        price: "300 RON",
      },
      {
        id: 7,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 8,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 9,
        source: "https://n.nordstrommedia.com/id/sr3/f0f6bd13-227d-42e7-9434-a2039321662b.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "pantaloni",
        brand: "gucci",
        price: "200 RON",
      },
      {
        id: 10,
        source: "https://n.nordstrommedia.com/id/sr3/d3a814e0-9dc0-4230-926c-76f783a5d14e.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "alti pantaloni",
        brand: "gucci",
        price: "300 RON",
      },
      {
        id: 11,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 12,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      {
        id: 13,
        source: "https://n.nordstrommedia.com/id/sr3/f0f6bd13-227d-42e7-9434-a2039321662b.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "pantaloni",
        brand: "gucci",
        price: "200 RON",
      },
      {
        id: 14,
        source: "https://n.nordstrommedia.com/id/sr3/d3a814e0-9dc0-4230-926c-76f783a5d14e.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "alti pantaloni",
        brand: "gucci",
        price: "300 RON",
      },
      {
        id: 15,
        source: "https://n.nordstrommedia.com/id/sr3/a4d5b47e-ec30-4bfe-be60-eb18cc14c9fc.jpeg?q=45&dpr=2&h=365.31&w=230",
        title: "cizme",
        brand: "gucci",
        price: "100 RON",
      },
      
];
    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {dummy.map((item, idx) => (
                    //item va lua fiecare valoare din dummy, key  
                    <img className="carousel-item" src={item} key={idx}/>
                ))}
            </Slider>
            <Slider {...settings2}>
                {dummy2.map((item, idx) => (
                    //item va lua fiecare valoare din dummy, key  
                    <ProductPreview product={item} key={idx} />
                ))} 
            </Slider>
        </div>
    )
}

export default Carousel;
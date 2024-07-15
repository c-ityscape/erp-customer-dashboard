import React, { useState } from "react";
import "./ImageSliderComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ImageSliderComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image:
        "https://4.imimg.com/data4/LB/XX/MY-28426755/3-jaw-lathe-chuck-1-500x500.jpg",
      title: "Product 1",
      description:
        "Discover the precision and power of our Heavy-Duty Mini Lathe Machine, designed for both hobbyists and professionals.",
      rating: 5,
    },
    {
      image:
        "https://ravimachines.com/wp-content/uploads/2021/01/Conpully-Lathe-Machine-Manufacturer-7-scaled.jpg",
      title: "Product 2",
      description: "Upgrade your workshop with our Precision Lathe Machine, engineered for exceptional accuracy and versatility. Ideal for metalworking, woodworking, and crafting projects",
      rating: 4,
    },
    {
      image: "https://woodgears.ca/lathe/chuck88.jpg",
      title: "Product 3",
      description: "The Compact Multi-Function Lathe Tool is your go-to solution for diverse machining tasks. This versatile tool combines powerful performance with a compact design",
      rating: 3,
    },
  ];

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="slider-container">
      <h2>Products</h2>
      <div className="slider-content">
        <button onClick={prevProduct} className="slider-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="product">
          <img
            src={products[currentIndex].image}
            alt={products[currentIndex].title}
          />
          <h3>{products[currentIndex].title}</h3>
          <p>{products[currentIndex].description}</p>
          <div className="rating">
            {"★".repeat(products[currentIndex].rating)}
          </div>
          <button className="order-button">Order Now</button>
        </div>
        <button onClick={nextProduct} className="slider-button">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSliderComponent;

"use client";

// src/components/BestSellers.jsx
import React, { useState } from 'react';

const BestSellers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bestSellers = [
    { img: '/images/sneakers.jpg', name: 'Sneakers' },
    { img: '/images/derbyShoes.jpg', name: 'Derby Shoes' },
    { img: '/images/loafers.jpg', name: 'Loafers' },
    { img: '/images/flats.jpg', name: 'Flats' },
    { img: '/images/heels.jpg', name: 'Heels' },
    { img: '/images/runningShoes.jpg', name: 'Running Shoes' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % bestSellers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + bestSellers.length) % bestSellers.length);
  };

  return (
    <div className="best-sellers-section">
      <h1 className="title">Best Sellers</h1>
      <div className="best-sellers">
        <div className="arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="gallery">
          <img src={bestSellers[currentSlide].img} alt={`Best Seller ${currentSlide + 1}`} />
          <div className="caption">{bestSellers[currentSlide].name}</div>
        </div>
        <div className="arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default BestSellers;

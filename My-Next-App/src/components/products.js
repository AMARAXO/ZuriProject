"use client"

import React, { useState, useEffect } from 'react';

const getImageSrc = (image) => {
  try {
    return require(`/images/${image}`).default;
  } catch (e) {
    console.error(`Image not found: ${image}`, e);
    return null;
  }
};

const ProductGrid = () => {
  const initialProducts = [
    { id: 1, name: 'Product 1', size: 'M', color: 'lightgray', image: 'sneakers.jpg' },
    { id: 2, name: 'Product 2', size: 'M', color: 'lightgray', image: 'shoe2.png' },
    { id: 3, name: 'Product 3', size: 'M', color: 'lightgray', image: 'shoe3.png' },
    { id: 4, name: 'Product 4', size: 'M', color: 'lightgray', image: 'shoe4.png' },
    { id: 5, name: 'Product 5', size: 'M', color: 'lightgray', image: 'shoe1.png' },
    { id: 6, name: 'Product 6', size: 'M', color: 'lightgray', image: 'shoe2.png' },
    { id: 7, name: 'Product 7', size: 'M', color: 'lightgray', image: 'shoe3.png' },
    { id: 8, name: 'Product 8', size: 'M', color: 'lightgray', image: 'shoe4.png' },
    { id: 9, name: 'Product 9', size: 'M', color: 'lightgray', image: 'shoe1.png' },
    { id: 10, name: 'Product 10', size: 'M', color: 'lightgray', image: 'shoe2.png' },
    { id: 11, name: 'Product 11', size: 'M', color: 'lightgray', image: 'shoe3.png' },
    { id: 12, name: 'Product 12', size: 'M', color: 'lightgray', image: 'shoe4.png' },
  ];

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleSizeChange = (id, newSize) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, size: newSize } : product
    ));
  };

  const handleColorChange = (id, newColor) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, color: newColor } : product
    ));
  };

  return (
    <div>
      <h2>Available Wears</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
<img src={`/images/${product.image}`} alt={product.name} className="product-image" />
<p>{product.name}</p>
            <div>
              <label>Size: </label>
              <select value={product.size} onChange={(e) => handleSizeChange(product.id, e.target.value)}>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            <div>
              <label>Color: </label>
              <input 
                type="color" 
                value={product.color} 
                onChange={(e) => handleColorChange(product.id, e.target.value)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    //console.log("productCard",addToCart);
    return (
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>${product.price}</strong></p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
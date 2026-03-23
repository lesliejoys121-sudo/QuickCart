import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/global.css';

const ProductCard = ({ product }) => {
    const { name, description, price, category, image } = product;
    const { addToCart } = useCart();

    return (
        <div className="product-card" role="article">
            <div className="product-image-container">
                <span className="product-badge">{category}</span>
                <img src={image} alt={name} className="product-image" loading="lazy" />
            </div>
            <div className="product-details">
                <h3 className="product-title">{name}</h3>
                <p className="product-description">{description}</p>
                <div className="product-footer">
                    <span className="product-price">${price.toFixed(2)}</span>
                    <button 
                        className="add-to-cart-btn" 
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${name} to cart`}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

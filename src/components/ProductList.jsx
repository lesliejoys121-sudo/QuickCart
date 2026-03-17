import React from 'react';
import ProductCard from './ProductCard';
import '../styles/global.css';

const ProductList = ({ products }) => {
    return (
        <section className="product-list-container">
            <div className="product-list-header">
                <h2>Featured Products</h2>
                <p>Discover our carefully curated collection for your everyday lifestyle.</p>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;

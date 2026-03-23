import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { products } from '../data/products';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="home-page">
            <section className="hero-section">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </section>
            
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <div className="empty-state">
                    <h3>No products found</h3>
                    <p>We couldn't find anything matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
};

export default Home;

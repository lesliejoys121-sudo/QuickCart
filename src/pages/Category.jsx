import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const Category = () => {
    const { categoryName } = useParams();
    
    /* Determine if category is valid from products data to provide accurate empty states.
       Since we don't have a distinct categories list, we just map everything to lowercase. */
    const filteredProducts = products.filter(
        product => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <div className="category-page">
            <div className="category-header">
                <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products</h2>
                <Link to="/" className="back-link">← Back to all products</Link>
            </div>
            
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <div className="empty-state">
                    <h3>Category not found</h3>
                    <p>We don't have any products in the "{categoryName}" category right now.</p>
                </div>
            )}
        </div>
    );
};

export default Category;

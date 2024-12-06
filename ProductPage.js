import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
    const [filters, setFilters] = useState({ query: '', category: '', priceRange: [0, 1000] });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <input 
                type="text" 
                name="query" 
                placeholder="Search by name" 
                onChange={handleFilterChange} 
            />
            
            <ProductList filters={filters} />
        </div>
    );
};

export default ProductsPage;

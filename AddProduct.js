import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', price: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
        savedProducts.push(product);
        localStorage.setItem('products', JSON.stringify(savedProducts));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Product Name" 
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <input 
                type="number" 
                placeholder="Price" 
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;

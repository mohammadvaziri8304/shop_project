import React, { useState } from 'react';

const Filters = ({ products, onFilter }) => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleFilter = () => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    onFilter(filtered);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">All Categories</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={(e) => setPriceRange([0, e.target.value])}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

const api = {
  getProducts: () => axios.get(`${API_BASE_URL}/products`),
  getProductById: (id) => axios.get(`${API_BASE_URL}/products/${id}`),
  getCategories: () => axios.get(`${API_BASE_URL}/products/categories`),
  getProductsByCategory: (category) => axios.get(`${API_BASE_URL}/products/category/${category}`),
  addProduct: (productData) => axios.post(`${API_BASE_URL}/products`, productData),
  updateProduct: (id, productData) => axios.put(`${API_BASE_URL}/products/${id}`, productData),
  deleteProduct: (id) => axios.delete(`${API_BASE_URL}/products/${id}`),
};

export default api;

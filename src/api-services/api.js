import axios from "axios";  

const API_URL = "http://localhost:8080/api/products";

const api = axios.create({
    baseURL: API_URL,
});

// Fetch all products
export const fetchProducts = async () => {
    const response = await api.get(''); // Removed '/'
    return response.data;
};

// Add new product
export const addProducts = async (product) => {
    const response = await api.post('', product);
    return response.data;
};

// Update product by ID
export const updateProductById = async (id, product) => {
    const response = await api.put(`/${id}`, product);
    return response.data;
};

// Delete product by ID
export const deleteProductById = async (id) => {
    await api.delete(`/${id}`); // Fixed ID parameter
};

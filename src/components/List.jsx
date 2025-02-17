import React, { useEffect, useState } from "react";
import { deleteProductById, fetchProducts, updateProductById } from "../api-services/api";
import Product from "./Product";

const List = ({onEdit}) => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProductById(id);
    loadProducts();
  };
  const handleEdit = (product) => {
    onEdit(product); // Pass product object to the parent component (App.js)
  };
  
  return (
    <div className="product-list">
      {product.map((product) => (
        <Product
          key={product.id}
          product={product}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default List;

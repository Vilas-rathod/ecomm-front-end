import React, { useEffect, useState } from "react";
import { deleteProductById, fetchProducts } from "../api-services/api";
import Product from "./Product";

const List = ({ onEdit }) => {
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
  return (
    <div className="product-list">
      {product.map((product) => (
        <Product
          key={product.id}
          product={product}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default List;

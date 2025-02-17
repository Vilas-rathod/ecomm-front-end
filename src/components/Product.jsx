import React from "react";
import AddProduct from "./AddProduct";

const Product = ({ onEdit, onDelete, product }) => {
  return (
    <div className="product">
      <h1>Product</h1>
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Status: {product.completed ? "completed" : "pending"}</p>
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default Product;

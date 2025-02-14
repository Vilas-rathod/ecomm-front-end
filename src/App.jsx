import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import { addProducts, updateProductById } from "./api-services/api";
import List from "./components/List";

function App() {
  const [editProduct, setEditProduct] = useState(null);

  const handleSubmit = async (product) => {
    if (editProduct) await updateProductById(editProduct.id, product);
    else await addProducts(product);
    setEditProduct(null);
  };
  return (
    <div className="App">
      <Header />
      <h1>Hello world Full Stack ToDo App</h1>
      <AddProduct onSubmit={handleSubmit} initialData={editProduct || {}} />
      <List onEdit={setEditProduct} />
    </div>
  );
}

export default App;

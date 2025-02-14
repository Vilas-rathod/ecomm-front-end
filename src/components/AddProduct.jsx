import React, { useState, useEffect } from "react";

const AddProduct = ({ onSubmit, initialData = {} }) => {
  // ✅ Ensure all required fields have default values
  const defaultFormData = {
    name: "",
    description: "",
    price: 0,
    completed: false,
  };

  // ✅ Merge initialData with default values to prevent undefined values
  const [formData, setFormData] = useState({
    ...defaultFormData,
    ...initialData,
  });
//   const[products,setProducts]=useState(initialProducts);


  useEffect(() => {
    setFormData({ ...defaultFormData, ...initialData }); // ✅ Update safely
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(defaultFormData); // ✅ Reset form safely
  };

  return (
    <div>
      <h1>Form to Add Product</h1>
      <form onSubmit={handleSubmit} className="add-product">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              price: Math.max(0, e.target.value),
            }))
          }
          required
        />
        <label>
          <input
            type="checkbox"
            name="completed"
            checked={formData.completed}
            onChange={handleChange}
          />
          Completed
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddProduct;

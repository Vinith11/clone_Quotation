// src/ProductForm.js
import React, { useState } from 'react';

const ProductForm = () => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisibility(!isFormVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="mt-4">
      <button
        onClick={toggleFormVisibility}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isFormVisible ? 'Cancel' : 'Add'}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-4 p-4 border rounded bg-gray-100">
          <div className="mb-4">
            <label htmlFor="manufacturer" className="block text-sm font-medium text-gray-600">
              Manufacturer Name:
            </label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              required
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description Name:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              required
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="dimmension" className="block text-sm font-medium text-gray-600">
            Dimmension :
            </label>
            <input
              type="text"
              id="dimmension"
              name="dimmension"
              required
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="weight" className="block text-sm font-medium text-gray-600">
            Weight:
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              required
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bprice" className="block text-sm font-medium text-gray-600">
              Basic Price:
            </label>
            <input
              type="text"
              id="bprice"
              name="bprice"
              required
              className="border p-2 w-full"
            />
          </div>



          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductForm;

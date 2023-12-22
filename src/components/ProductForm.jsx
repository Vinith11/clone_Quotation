import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    controller: '',
    alternator: '',
    breaker: 'No',
    breakerName: '',
    dimensions: '',
    weight: '',
    price: '',
    remarks: 'No',
    remarksDetail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="container mx-auto mt-8">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <select
            name="name"
            id="name"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.name}
          >
            <option value="">Select Name</option>
            {/* Add your dropdown options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <select
            name="rating"
            id="rating"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.rating}
          >
            <option value="">Select Rating</option>
            {/* Add your dropdown options here */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="controller">
            controller
          </label>
          <input
            type="text"
            name="controller"
            placeholder="Enter controller"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.controller}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alternator">
            alternator
          </label>
          <input
            type="text"
            name="alternator"
            placeholder="Enter alternator"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.alternator}
          />
        </div>

        
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="breaker">
            Breaker
          </label>
          <select
            name="breaker"
            id="breaker"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.breaker}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          {formData.breaker === 'Yes' && (
            <input
              type="text"
              name="breakerName"
              placeholder="Name of the Breaker"
              className="mt-2 p-2 border rounded w-full"
              onChange={handleInputChange}
              value={formData.breakerName}
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensions">
            Dimensions
          </label>
          <input
            type="text"
            name="dimensions"
            placeholder="Enter Dimensions"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.dimensions}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
          weight
          </label>
          <input
            type="text"
            name="weight"
            placeholder="Enter weight"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.weight}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          price
          </label>
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.price}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks">
            Remarks
          </label>
          <select
            name="remarks"
            id="remarks"
            className="w-full p-2 border rounded"
            onChange={handleInputChange}
            value={formData.remarks}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          {formData.remarks === 'Yes' && (
            <input
              type="text"
              name="remarksDetail"
              placeholder="Name of the Breaker"
              className="mt-2 p-2 border rounded w-full"
              onChange={handleInputChange}
              value={formData.remarksDetail}
            />
          )}
        </div>

        

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;

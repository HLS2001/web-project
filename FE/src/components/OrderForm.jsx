import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    // Initialize the form data state with empty values
    // for the order details
    userId: '',
    // Add other order fields as needed (e.g., products, quantity, etc.)
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend to create a new order
      const response = await axios.post('/orders/add', formData);
      const orderId = response.data;

      // Redirect or perform any other action after successful order creation
      console.log('Order created with ID:', orderId);
    } catch (error) {
      console.error('Error creating order:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
      </label>
      {/* Add other input fields for order details */}
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;

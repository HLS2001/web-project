import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // Send a GET request to the backend to fetch the order details
        const response = await axios.get(`/orders/${orderId}`);
        const orderData = response.data;

        // Update the order state with the fetched data
        setOrder(orderData);
      } catch (error) {
        console.error('Error fetching order:', error.response.data);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order._id}</p>
      {/* Display other order details as needed */}
    </div>
  );
};

export default OrderDetails;

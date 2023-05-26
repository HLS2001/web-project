import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import "./components/checkout.css";
import { useCartContext } from "./context/cart_context";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // const location = useLocation();
  // const { cartItems } = location.state;
  const { c } = useCartContext();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post('/api/orders/add', {
      userId: 'yourUserId', // Thay thế bằng userId của người dùng hiện tại
      
      
      address,
      cartItems: c,
      
    });
    const orderId = res.data;
    navigate('/order-complete');

    

    console.log('Order placed. Order ID:', orderId);
  } catch (error) {
    console.error('Error placing order:', error);
  }
    
  };

  return (
    <div className="container">
      <h1>Check-out Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

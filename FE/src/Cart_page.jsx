import React from "react";
// import { useCartContext } from "./context/cart_context";
// import { Link } from "react-router-dom";
// import { CartContent } from "../components";

// const Cart_page = () => {
//   const { cart } = useCartContext();

//   return (
//     <main>
      
//     </main>
//   );
// };


// function Cart_page() {
//     return (
//         <div className="CartPage">
//           <div className="cart">

            
//           </div>
    
          
//           <Footer />
//         </div>
//       );
// }



// export default Cart_page;

import React, { useEffect, useState } from "react";
import axios from "axios";



function Cart_page() {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
    //   const response = await axios.get(API_URL);
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addItemToCart = async () => {
    try {
    //   const response = await axios.post(API_URL, { name: newItem });
      setCartItems([...cartItems, response.data]);
      setNewItem('');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const removeItemFromCart = async (itemId) => {
    try {
      await axios.delete(`${API_URL}/${itemId}`);
      setCartItems(cartItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItemToCart}>Add Item</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => removeItemFromCart(item._id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart_page;


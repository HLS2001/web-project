import React from "react";
import { useCartContext } from "./context/cart_context";
import { formatPrice } from './utils/helpers'


const Cart = () => {
  const { c, clearCart, toggleAmount,removeItem } = useCartContext();
 

  const calculateTotal = () => {
    let total = 0;
    c.forEach((p) => {
      total += p.price * p.amount;
    });
    return total;
  };
  // const total = useMemo(()=> c.reduce((total, p) => total + p.amount * p.price, 0) ,[c])
  return (
    <main>
      {c.map((p) => {
        return (
          <div className="cartpage" key={p._id}>
            <div className="cart_">
              <img src={p.url} alt={p.name} />
              <p>{p.name}</p>
            </div>

            <div>
              <button onClick={() => toggleAmount(p._id, -1)}>-</button>
              <h1>{p.amount}</h1>
              <button onClick={() => toggleAmount(p._id, 1)}>+</button>

              <button className="remove-btn" onClick={() => removeItem(p._id)}>
                Remove
              </button>
            </div>

            <div>
              <span>
                {formatPrice(p.price)}
                <button onClick={() => clearCart(p._id)}>Clear</button>
              </span>
            </div>
          </div>
        );
      })}

      <div className="total">
        <h4>Total: {formatPrice(calculateTotal())}</h4>
        {/* <h4>Total: {formatPrice({total})}</h4> */}
      </div>
    </main>
  );
};

export default Cart;

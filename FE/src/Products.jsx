import ShopItem from "./ShopItem";
import SelectInput from "./SelectInput";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useCartContext } from "./context/cart_context";
import { useRef } from "react";

function Products_page() {
  const { addToCart } = useCartContext();
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async function () {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BE_URI}product`);
      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="shop-body">
      <form className="Shop">
        <div className="shop-mid">
          <SelectInput title="Category" options={[]} />
          <ShopItem title="Name" type="text" />
          <ShopItem title="Min Price" type="number" />
          <ShopItem title="Max Price" type="number" />

          <div className="shop-item-submit">
            <button>search</button>
          </div>
        </div>
      </form>
      {products.map((p) => (
        <article key={p._id}>
          <h1>{p.name}</h1>
          <h2>{p.price}</h2>
          <h2>{p.discount}</h2>
          <h2>{p.description}</h2>
          
          <img src={p.url || "/no-img.png"} alt="" />
          <button
            onClick={(e) => {
              addToCart(p._id, 1, p);
            }}
          >
            add to cart
          </button>
        </article>
      ))}
    </div>
  );
}

export default Products_page;

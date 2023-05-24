import ShopItem from "./ShopItem";
import SelectInput from "./SelectInput";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useCartContext } from "./context/cart_context";
import { useRef } from "react";
import "./components/product.css";



function Products_page() {
  const { addToCart } = useCartContext();
  const [products, setProducts] = useState([]);
  const [cs, setCs] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const fetchData = useCallback(async function (categoryId, name, minPrice, maxPrice) {
    setLoading(true);
    setError(false);
    try {
      const params = {};

      if (categoryId) {
        params.categoryId = categoryId
      }

      if (name) {
        params.search = name;
      }

      if (minPrice) {
        params.minPrice = minPrice;
      }

      if (maxPrice) {
        params.maxPrice = maxPrice;
      }

      const { data } = await axios.get(`${import.meta.env.VITE_BE_URI}product`, {
        params: params
      });

      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [ productName, minPrice, maxPrice]);

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchData(e.target.category.value, e.target.nameSearch.value, e.target.minPrice.value, e.target.maxPrice.value);
  };

  const fetchC = useCallback(async function () {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BE_URI}category`);
      setCs(data);
    } catch (error) {
    } finally {
    }
  }, []);

  useEffect(() => {
    fetchC();
    fetchData();
  }, [fetchData, fetchC]);

  return (
    <div className="shop-body">
      <form className="Shop" onSubmit={handleSearch}>
        <div className="shop-mid">
          <SelectInput
            title="Category"
            name="category"
            options={cs}
            onChange={(e) => setCategory(e.target.value)}
          />
          <ShopItem
            title="Name"
            type="text"
            name="nameSearch"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <ShopItem
            title="Min Price"
            type="number"
            name="minPrice"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <ShopItem
            title="Max Price"
            name="maxPrice"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <div className="shop-item-submit">
            <button type="submit">search</button>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />

      <section className="p_box">
        {products.map((p) => (
          <article key={p._id}>
            <div className="p_image">
              <img src={p.url || "/no-img.png"} alt="" />
            </div>

            <div className="p_details">
              <p>{p.name}</p>
              <p>Price: {p.price}$</p>
              {/* <p>{p.discount}</p> */}
              <p>{p.description}</p>
              <button
                onClick={(e) => {
                  addToCart(p._id, 1, p);
                }}
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}


export default Products_page;

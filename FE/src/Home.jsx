import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./index.css";
import { AiTwotoneStar, AiOutlineShoppingCart } from "react-icons/ai";
import Product from "./Product";


import { useGetALLProductsQuery } from "./features/productsApi";

const Home=()=>{
  
  const {data,error, isLoading} = useGetALLProductsQuery();
  
}

function Home() {
  return (
    <div className="App">
      <div className="mid">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <Link to="shop"><button>ShopNow</button></Link>
        
      </div>

      {/* <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden design</p>
        <div className="product-container">
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f1.jpg"}
          />

          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f2.jpg"}
          />
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f3.jpg"}
          />
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f4.jpg"}
          />
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f5.jpg"}
          />
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f6.jpg"}
          />
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f7.jpg"}
          />
          <Product
            brand="Adidas"
            name={"Cartoon Astronaut T-Shirts"}
            price={78}
            url={"public/product/f8.jpg"}
          />
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default Home;

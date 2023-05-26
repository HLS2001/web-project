import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products_page from "./Products";
import Home from "./Home";
import Nav from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Cart_page from "./Cart";
// import OrderForm from "./components/OrderForm";
// import OrderDetails from "./components/OrderDetails";
import CheckoutPage from "./checkoutpage";
// import OrderCompletePage from "./components/OrderCompletePage";
import Admin from "./Admin";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route element={<Home />} path="/" />
            {/* <Route path="/orders/new" element={<OrderForm />} />
            <Route path="/orders/:id" element={<OrderDetails />} /> */}
           
            {/* <Route path="/order-complete" component={OrderCompletePage} /> */}

            <Route element={<Products_page />} path="products_page" />

            <Route element={<Login />} path="login" />
            <Route element={<Register />} path="register" />
            <Route element={<Cart_page />} path="cart_page" />
            <Route element={<Admin />} path="admin" />
            <Route element={<CheckoutPage />} path="checkoutpage" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

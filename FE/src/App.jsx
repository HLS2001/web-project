import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";
import Nav from "./Navbar";
import About from "./About";
import Login from "./Login";
import Bag from "./Bag";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route element={<Home />} path="/" />

            <Route element={<Shop />} path="shop" />
            <Route element={<About />} path="about" />
            <Route element={<Login />} path="login" />
            <Route element={<Bag />} path="bag" />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}
export default App;

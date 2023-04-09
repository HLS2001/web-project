import {  NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { BiShoppingBag,BiLogIn } from "react-icons/bi";
import "./index.css";
import Footer from "./Footer";

function Home() {
    return (
      <><>
        <section className="header">
          <Logo width={180} height={90} />

          <ul className="navbar">
            <li>
              <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>Shop</NavLink>
            </li>

            <li>
              <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </li>

            <li>
              <NavLink to='/Bag' className={({ isActive }) => isActive ? 'active' : ''}>
                <BiShoppingBag />
              </NavLink>
            </li>
            <li>
              <NavLink to='/Login' className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
            </li>
          </ul>
        </section>
        <Outlet />
      </>
      </>
  
        
    );
  }
  
  export default Home;
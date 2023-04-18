import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { BiShoppingBag } from "react-icons/bi";
import "./index.css";
import { FaOutdent } from "react-icons/fa";
import React, { useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <>
        <section className="header">
          <Logo width={180} height={90} />
          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FaOutdent />
          </button>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <div className="expanded">
            <ul className="navbar">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="shop"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Shop
                </NavLink>
              </li>
              
              <li>
                <NavLink
                  to="bag"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <BiShoppingBag />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="register"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Register
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </section>
        <Outlet />
      </>
    </>
  );
}
export default Navbar;

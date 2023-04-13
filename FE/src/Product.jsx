import { AiTwotoneStar, AiOutlineShoppingCart } from "react-icons/ai";
import {  Link } from "react-router-dom";


export default function ({price, name,brand, url}) {
    
    return (
        <div className="pro">
        <img src={url} alt="" />
        <div className="des">
          <span>{brand}</span>
          <h5>{name}</h5>
          <div className="star">
            <a href="">
              <AiTwotoneStar />
            </a>
            <a href="">
              <AiTwotoneStar />
            </a>
            <a href="">
              <AiTwotoneStar />
            </a>
            <a href="">
              <AiTwotoneStar />
            </a>
            <a href="">
              <AiTwotoneStar />
            </a>
          </div>
          <h4>${price}</h4>
        </div>
        <a href="#">
          <AiOutlineShoppingCart />
        </a>
      </div>
    );
}

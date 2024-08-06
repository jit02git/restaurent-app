import React from "react";
import {LOGO_URL} from '../utils/constants'

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt=""
          />
        </div>
        <div className="nav-items ">
          <ul>
            <li>
              <input
                className="search-btn"
                type="search"
                placeholder="Search Restaurant"
              />
              <button className="search-btn" type="button" placeholder="Search">
                Search
              </button>
            </li>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Explore a world of delicious flavors with our food delivery app.
          Discover top dishes near you, customize your order, and enjoy fast,
          hassle-free delivery. Savor every bite, anytime, anywhere. Your
          cravings, our priority!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

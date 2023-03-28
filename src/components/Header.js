import React from "react";

const Header = () => {
  return (
    <div className="ui fixed">
      {/* menu */}
      <div className="ui container ">
        {/* center */}
        <div className="site_heading">
          <h2>
            Ecommerce shop
            <button className="btn">Sign in</button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

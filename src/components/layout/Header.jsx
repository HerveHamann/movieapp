import React from "react";
import star from "../../assets/star.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>my movie app</h1>
        <img src={star} alt="star" />
      </div>
      <ul>
        <li>New</li>
        <li>Live TV</li>
        <li>TV Shows</li>
        <li>My favourites</li>
        <li>My account</li>
      </ul>
    </div>
  );
};

export default Header;

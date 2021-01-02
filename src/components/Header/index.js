import React from "react";
import logo from "../../assets/netflix-logo.png";

const Header = ({ getSearch }) => (
  <div>
    <img src={logo} alt="Logo" />
    <input
      placeholder="Pesquise por um filme"
      onChange={(event) => getSearch(event.target.value.toUpperCase())}
    />
  </div>
);

export default Header;

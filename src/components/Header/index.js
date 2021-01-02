import React from "react";
import logo from "../../assets/netflix-logo.png";
import * as Style from "./style";
import { SearchOutlined } from "@ant-design/icons";

const Header = ({ getSearch }) => (
  <Style.Context>
    <img src={logo} alt="Logo" />

    <Style.Search>
      <SearchOutlined />
      <input
        placeholder="Busque por um titulo ..."
        onChange={(event) => getSearch(event.target.value.toUpperCase())}
      />
    </Style.Search>
  </Style.Context>
);

export default Header;

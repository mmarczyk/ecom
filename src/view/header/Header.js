import React from "react";
import Search from "./Search.js";
import UserInfo from "./UserInfo.js";
import Menu from "./Menu.js";

const Header = () => {
  return (
    <div className="Header">
      <div className="top">
        <div className="logo">
          <img src="./gfx/logo.png" alt="logo" />
        </div>
        <UserInfo pos="top" />
        <Menu type="small" />
        <Search />
        <UserInfo pos="bottom" />
      </div>
      <Menu type="normal" />
    </div>
  );
};

export default Header;

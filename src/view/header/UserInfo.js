import React from "react";
import Cart from "./Cart.js";

const UserInfo = props => {
  const css = "UserInfo " + props.pos;
  return (
    <div className={css}>
      <div>
        <span>Zaloguj</span>
      </div>
      <Cart />
    </div>
  );
};

export default UserInfo;

import React from "react";

const Menu = props => {
  const css = "Menu " + props.type;
  return (
    <div className={css}>
      <div className="nav">
        <i className="icofont-navigation-menu" />
      </div>
      <ul>
        <li>
          <span>Kategoria 1</span>
          <ul className="sub">
            <li>Subkategoria 1.1</li>
            <li>Subkategoria 1.2</li>
          </ul>
        </li>
        <li>
          <span>Kategoria 2</span>
          <ul className="sub">
            <li>Subkategoria 2.1</li>
            <li>Subkategoria 2.2</li>
            <li>Subkategoria 2.3</li>
            <li>Subkategoria 2.4</li>
          </ul>
        </li>
        <li>
          <span>Kategoria 3</span>
          <ul className="sub">
            <li>Subkategoria 3.1</li>
            <li>Subkategoria 3.2</li>
          </ul>
        </li>
        <li>
          <span>Kategoria 4</span>
          <ul className="sub">
            <li>Subkategoria 4.1</li>
            <li>Subkategoria 4.2</li>
            <li>Subkategoria 4.2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

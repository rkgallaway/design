import React from "react";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Info</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

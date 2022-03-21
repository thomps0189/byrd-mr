import React from "react";
const HeaderLogo = require("../../assets/Images/Logo.png");
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#store">Store</a>
        </li>
        <li>
          <a href="#tutorials">Tutorials</a>
        </li>
        <div id="image-div">
          <img id="header-img" src={HeaderLogo} alt="logo" />
        </div>
        {/* <HeaderLogo /> */}
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

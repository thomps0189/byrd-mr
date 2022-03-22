import React from "react";
const HeaderLogo = require("../../assets/Images/Logo.png");
function Nav(props) {
  const { contactSelected, setContactSelected } = props;
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
          <a href="/">
            <img id="header-img" src={HeaderLogo} alt="logo" />
          </a>
        </div>
        {/* <HeaderLogo /> */}
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li className={`${contactSelected && "navActive"}`}>
          <a onClick={() => setContactSelected(true)} href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { Outlet, Link } from "react-router-dom";

export const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo class="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/">
        Contacts
      </Link>
    </div>
  </div>
);

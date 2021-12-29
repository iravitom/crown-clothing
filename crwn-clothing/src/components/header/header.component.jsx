import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import { Outlet, Link } from "react-router-dom";

export const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/">
        Contacts
      </Link>

      {currentUser ? (
        <div onClick={() => auth.signOut()} className="option">
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signIn">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogleSigIn, ...otherProps }) => (
  <button
    className={`${isGoogleSigIn ? "google-button" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

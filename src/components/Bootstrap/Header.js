import React from "react";

const Header = ({ dark, children, className, containerClassName }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <nav
      className={`navbar navbar-${dark} bg-${dark}${
        className ? " " + className : ""
      }`}
    >
      <div className="container-fluid">
        <span
          className={
            "navbar-brand mb-0 h1" +
            (containerClassName ? " " + containerClassName : "")
          }
        >
          {children}
        </span>
      </div>
    </nav>
  );
};

export default Header;

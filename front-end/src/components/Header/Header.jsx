import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="shadow sticky z-50 top-0 p-5">
        <nav>
          <Link to="/">home</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;

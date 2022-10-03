import React from "react";
import { IWeb } from "../utils/icons";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <img src={IWeb} alt="" />
        <h6>my travel journal</h6>
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px", background: "#7b4b4b", padding: "10px" }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/about" style={{ color: "white" }}>About us</Link>
    </div>
  );
}

export default Navbar;

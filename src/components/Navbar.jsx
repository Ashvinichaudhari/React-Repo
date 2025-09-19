import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/dashboard/rationcard" style={{ margin: "10px" }}>Ration Card</Link>
      <Link to="/dashboard/addmember" style={{ margin: "10px" }}>Add Member</Link>
      <Link to="/dashboard/mystock" style={{ margin: "10px" }}>My Stock</Link>
      <Link to="/dashboard/distributedstock" style={{ margin: "10px" }}>Distributed Stock</Link>
    </nav>
  );
}

export default Navbar;

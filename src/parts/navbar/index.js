import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="images/snail.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      My portfolio
    </a>
  </div>
</nav>
  );
}

export default Navbar;
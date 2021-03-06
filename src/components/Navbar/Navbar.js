import React from "react";

const Nav = () =>
<nav className="navbar navbar-default">
<div className="container-fluid">
 
  <div className="navbar-header">
    <a className="navbar-brand" href="/">Myna</a>
  </div>

  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav">
      <li className="active"><a href="/">Home<span className="sr-only">(current)</span></a></li>
      <li><a href="/saved">Starred</a></li>
      <li><a href = "/">My Account</a></li>
    </ul>
    
  </div>
</div>
</nav>

export default Nav;

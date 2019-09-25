import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (

      <header>
        <div className="container">
        <Link to="/home"><img src="logo-lumineers.png" alt="" /></Link>
          <div className="menu">
            <ul>
              <li><Link to="/why"> WHY <span>Choose Lumineers</span></Link></li>
              <li><Link to="/how"> HOW <span>Choose Lumineers</span></Link></li>
              <li><Link to="/what"> WHAT <span>Choose Lumineers</span></Link></li>
            </ul>
          </div>
          <div className="form">
            <p>Find A Certified Lumineers Dentist</p>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="zip" />
            <button />
            <p><span>Or Call</span>888-437-7179</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
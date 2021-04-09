import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { auth } from '../../firebase';

function Header() {
  return (
    <nav className="header">
      <div className="header__container">
        <div>
          <Link to="/">
            <img
              className="header__logo"
              src="https://firebasestorage.googleapis.com/v0/b/tybca-project.appspot.com/o/assets%2Flogo001.png?alt=media&token=76107bca-7ed7-476f-bf2f-30a440a0928d"
              //"https://josephreisigl.files.wordpress.com/2015/08/amazonlogo.png"
              alt="logo"
            />
          </Link>

          <NavItem text="Dashboard" link="/" />
          <NavItem text="Orders" link="/orders" />
          <NavItem text="View Details" link="/user" />

        </div>
        
        <button className="header__logoutBtn btn btn-secondary" onClick={() => auth.signOut()}>Logout</button>
      </div>
    </nav>
  );
}

function NavItem({ text, link }) {
  return (
    <NavLink
      exact
      className="btn text-light"
      activeClassName="btn-primary"
      to={link}
    >
      {text}
    </NavLink>
  );
}

export default Header;

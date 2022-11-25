import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

var hasFlipped = "False";

function openNav() {
  if (hasFlipped == "True") {
    document.getElementById("nav").style.display = "none";
    hasFlipped = "False";
  } else if (hasFlipped == "False") {
    document.getElementById("nav").style.display = "flex";
    hasFlipped = "True";
  }
}

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars id={"hamburger"} onClick={openNav} />

        <NavMenu id={"nav"}>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/map" activeStyle>
            Map
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

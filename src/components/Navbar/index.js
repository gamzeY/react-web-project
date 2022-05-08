import React from "react";
import { FaBars, FaRegPaperPlane } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Logo
} from "./NavbarElements";


const toogleHome = () =>{
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav id="nav">
        <NavbarContainer>
          <Logo>
          <FaRegPaperPlane />
          </Logo>
          <NavLogo onClick={toogleHome}>Bla Software </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="product" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Product</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="footer" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;

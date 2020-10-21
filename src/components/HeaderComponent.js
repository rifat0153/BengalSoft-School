import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  

  return (
      
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home"><span className="fa fa-envelope-open-o fa-lg"></span> info@school.com</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="mr-auto mx-auto" navbar>
          </div>
      
            <NavbarText >
                Follow Us:
            </NavbarText>
            
            <NavLink   href="https://www.facebook.com/"><span className="fa fa-facebook fa-lg"></span></NavLink>
            <NavLink   href='/contactus'><span className="fa fa-youtube fa-lg"></span></NavLink>
            <NavLink  href='/contactus'><span className="fa fa-twitter fa-lg"></span></NavLink>
            <NavLink   href='/contactus'><span className="fa fa-instagram fa-lg"></span></NavLink>
            <NavLink  href='/contactus'><span className="fa fa-linkedin fa-lg"></span></NavLink>
            <NavLink   herf='/home'><span></span> <b className="login">Login / Register</b></NavLink>
           
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import ModalExample from './SearchModalComponent';

const Header3 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        
      <Navbar color="light" light expand="md" >
        
        <NavbarBrand href="/home" ><i className="fa fa-graduation-cap fa-lg header3-logo"></i><b className="ml-2"> EDUBIN</b></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            {/* <div className="mr-auto" navbar></div> */}
          <Nav className="" navbar>
           
            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav><b>HOME</b></DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>HOME1</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav><b>PAGES</b></DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav><b>COURSES</b></DropdownToggle>
              <DropdownMenu left>
                <DropdownItem><NavLink href="/course">Courses</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav><b>CURRICULUM</b></DropdownToggle>
              <DropdownMenu left>
                <DropdownItem><NavLink href="/calendar">Academic Calendar</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* <UncontrolledDropdown nav inNavbar className="ml-auto mx-auto">
              <DropdownToggle nav><b>TEACHERS & STAFF</b></DropdownToggle>
              <DropdownMenu left>
                <DropdownItem><NavLink href="/calendar">Recent Blogs</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            <NavItem>
              <NavLink href='/teacher'><b>TEACHERS & STAFF</b></NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar >
              <DropdownToggle nav><b>SHOP</b></DropdownToggle>
              <DropdownMenu left>
                <DropdownItem><NavLink href="/calendar">Local Product</NavLink></DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar >
            <DropdownToggle nav><b>CONTACT</b></DropdownToggle>
            <DropdownMenu left>
                <DropdownItem><NavLink href="/calendar">Contact Us</NavLink></DropdownItem>
            </DropdownMenu>
            </UncontrolledDropdown>

            </Nav>
            
          {/* <div className="mx-auto"> */}
          <NavLink className="nav-link ml-auto"  to='/home'><i className="fa fa-shopping-bag fa-lg"></i></NavLink>
          <ModalExample/>
          {/* </div> */}
          
          {/* <NavLink className="nav-link  mx-auto"  to='/home'><i className="fa fa-shopping-bag fa-lg"></i></NavLink>
          <ModalExample/> */}

        </Collapse>
      </Navbar>
      
    </div>
  );
}

export default Header3;
import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand,NavbarText, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div className="header2">
                <Navbar dark className="header1" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        {/* <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand> */}
                    
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar >
                            <div className="row">
                                <div >
                                    <NavItem >
                                        <NavLink className="nav-link"  to='/home'><span className="fa fa-envelope-open-o fa-lg"></span> info@yourmail.com</NavLink>
                                    </NavItem>
                                </div>
                                <div >
                                    <NavItem className="navbar-text">
                                        Follow Us:
                                    </NavItem>
                                </div>
                                    <NavItem >
                                        <NavLink className="nav-link"  to='/contactus'><span className="fa fa-facebook fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link"  to='/contactus'><span className="fa fa-youtube fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link"  to='/contactus'><span className="fa fa-twitter fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link"  to='/contactus'><span className="fa fa-instagram fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link"  to='/contactus'><span className="fa fa-linkedin fa-lg"></span></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/home'><span></span> <b className="login">Login / Register</b></NavLink>
                                    </NavItem>
                                
                                
                            </div>  
                        
                        </Nav>
                        </Collapse>

                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;
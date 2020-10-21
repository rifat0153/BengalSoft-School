import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, UncontrolledCollapse, Collapse, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import Search from './SearchComponent';
import ModalExample from './SearchModalComponent';



class Header2 extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
        this.toggle7 = this.toggle7.bind(this);
        this.toggle8 = this.toggle8.bind(this);
        this.toggle9 = this.toggle9.bind(this);
        this.onMouseEnter1 = this.onMouseEnter1.bind(this);
        this.onMouseLeave1 = this.onMouseLeave1.bind(this);
        this.onMouseEnter2 = this.onMouseEnter2.bind(this);
        this.onMouseLeave2 = this.onMouseLeave2.bind(this);
        this.onMouseEnter3 = this.onMouseEnter3.bind(this);
        this.onMouseLeave3 = this.onMouseLeave3.bind(this);
        this.onMouseEnter4 = this.onMouseEnter4.bind(this);
        this.onMouseLeave4 = this.onMouseLeave4.bind(this);
        this.onMouseEnter5 = this.onMouseEnter5.bind(this);
        this.onMouseLeave5 = this.onMouseLeave5.bind(this);
        this.onMouseEnter6 = this.onMouseEnter6.bind(this);
        this.onMouseLeave6 = this.onMouseLeave6.bind(this);
        this.onMouseEnter7 = this.onMouseEnter7.bind(this);
        this.onMouseLeave7 = this.onMouseLeave7.bind(this);
        this.onMouseEnter8 = this.onMouseEnter8.bind(this);
        this.onMouseLeave8 = this.onMouseLeave8.bind(this);
        this.onMouseEnter9 = this.onMouseEnter9.bind(this);
        this.onMouseLeave9 = this.onMouseLeave9.bind(this);
        
        this.state = {
          value: '',
          suggestions: [],

          isNavOpen: false,
          dropdownOpen1: false,
          dropdownOpen2: false,
          dropdownOpen3: false,
          dropdownOpen4: false,
          dropdownOpen5: false,
          dropdownOpen6: false,
          dropdownOpen7: false,
          dropdownOpen8: false,
          dropdownOpen9: false,
        };
      }




      //for navbar collapse
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      
    //for home ---- 1
      toggle1() {
        this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1
        }));
      }
    
      onMouseEnter1() {
        this.setState({dropdownOpen1: true});
      }
    
      onMouseLeave1() {
        this.setState({dropdownOpen1: false});
      }

      //for Pages---- 2
      toggle2() {
        this.setState(prevState => ({
          dropdownOpen2: !prevState.dropdownOpen2
        }));
      }
    
      onMouseEnter2() {
        this.setState({dropdownOpen2: true});
      }
    
      onMouseLeave2() {
        this.setState({dropdownOpen2: false});
      }

      //for Courses ----- 3
      toggle3() {
        this.setState(prevState => ({
          dropdownOpen3: !prevState.dropdownOpen3
        }));
      }
    
      onMouseEnter3() {
        this.setState({dropdownOpen3: true});
      }
    
      onMouseLeave3() {
        this.setState({dropdownOpen3: false});
      }

      //for Events ----- 4
      toggle4() {
        this.setState(prevState => ({
          dropdownOpen4: !prevState.dropdownOpen4
        }));
      }
    
      onMouseEnter4() {
        this.setState({dropdownOpen4: true});
      }
    
      onMouseLeave4() {
        this.setState({dropdownOpen4: false});
      }
      //for Teachers ----- 5
      toggle5() {
        this.setState(prevState => ({
          dropdownOpen5: !prevState.dropdownOpen5
        }));
      }
    
      onMouseEnter5() {
        this.setState({dropdownOpen5: true});
      }
    
      onMouseLeave5() {
        this.setState({dropdownOpen5: false});
      }
      //for BLOG----- 6
      toggle6() {
        this.setState(prevState => ({
          dropdownOpen6: !prevState.dropdownOpen6
        }));
      }
    
      onMouseEnter6() {
        this.setState({dropdownOpen6: true});
      }
    
      onMouseLeave6() {
        this.setState({dropdownOpen6: false});
      }
      //for Shop -----7
      toggle7() {
        this.setState(prevState => ({
          dropdownOpen7: !prevState.dropdownOpen7
        }));
      }
    
      onMouseEnter7() {
        this.setState({dropdownOpen7: true});
      }
    
      onMouseLeave7() {
        this.setState({dropdownOpen7: false});
      }
      //for Contact ----- 8
      toggle8() {
        this.setState(prevState => ({
          dropdownOpen8: !prevState.dropdownOpen8
        }));
      }
    
      onMouseEnter8() {
        this.setState({dropdownOpen8: true});
      }
    
      onMouseLeave8() {
        this.setState({dropdownOpen8: false});
      }

      //for Contact ----- 9
      toggle9() {
        this.setState(prevState => ({
          dropdownOpen9: !prevState.dropdownOpen9
        }));
      }
      onMouseEnter9() {
        this.setState({dropdownOpen9: true});
      }
      onMouseLeave9() {
        this.setState({dropdownOpen9: false});
      }






      
    render() {

      

        return(
            <div>
                <Navbar light className="head" expand="md">
                    <div className="container header2">
                        <NavbarToggler onClick={this.toggleNav} />
                        {/* <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='EDUBIN' /></NavbarBrand> */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'><span className="fa fa-graduation-cap fa-lg header2-logo" height="30" width="41"></span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'> <b className="logotext">EDUBIN</b></NavLink>
                                </NavItem>

                                <NavItem>
                                  <Dropdown className="d-inline-block header2-position"  onMouseOver={this.onMouseEnter1} onMouseLeave={this.onMouseLeave1} isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                                  <DropdownToggle className="dropdowntoggle1">
                                  <NavLink className="nav-link"  to='/home'><b>HOME</b></NavLink>
                                  </DropdownToggle>
                                  <DropdownMenu>
                                  <DropdownItem >HOME1 </DropdownItem>
                                  <DropdownItem >HOME2</DropdownItem>
                                  <DropdownItem >HOME3</DropdownItem>
                                  <DropdownItem >HOME4</DropdownItem>
                                  </DropdownMenu>
                                  </Dropdown>
                                </NavItem>

                                
                                <NavItem>
                                  <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter2} onMouseLeave={this.onMouseLeave2} isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                                  <DropdownToggle className="dropdowntoggle1">
                                  <NavLink className="nav-link"  to='/home'><b>PAGES</b></NavLink>
                                  </DropdownToggle>
                                  <DropdownMenu>
                                  <DropdownItem >ABOUT US</DropdownItem>
                                  <DropdownItem >GALLERY</DropdownItem>
                                  <DropdownItem >PRIVACY POLICY</DropdownItem>
                                  <DropdownItem >FAQ</DropdownItem>
                                  </DropdownMenu>
                                  </Dropdown>
                                </NavItem>
                               

                              <NavItem>
                                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter3} onMouseLeave={this.onMouseLeave3} isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                                <DropdownToggle className="dropdowntoggle1">
                                <NavLink className="nav-link"  to='/home'><b>COURSES</b></NavLink>
                                </DropdownToggle>
                                <DropdownMenu>
                                <DropdownItem ><Link className="nav-link"  to='/course'> <b>Courses</b></Link></DropdownItem>
                                <DropdownItem >COURSE SINGLE</DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                              </NavItem>

                              <NavItem>
                                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter4} onMouseLeave={this.onMouseLeave4} isOpen={this.state.dropdownOpen4} toggle={this.toggle4}>
                                <DropdownToggle className="dropdowntoggle1">
                                <NavLink className="nav-link"  to='/home'><b>CURRICULUM</b></NavLink>
                                </DropdownToggle>
                                <DropdownMenu>
                                <DropdownItem >OUR CURRICULUM</DropdownItem>
                                <DropdownItem><Link className="nav-link"  to='/calendar'> <b>ACADEMIC CALENDAR</b></Link></DropdownItem>
                                <DropdownItem >CLASS TIME TABLE</DropdownItem>
                                </DropdownMenu>
                                </Dropdown>
                              </NavItem>
                            

                            <NavItem>
                              <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter5} onMouseLeave={this.onMouseLeave5} isOpen={this.state.dropdownOpen5} toggle={this.toggle5}>
                                  <DropdownToggle className="dropdowntoggle1">
                                  <NavLink className="nav-link"  to='/home'><b>TEACHERS</b></NavLink>
                                  </DropdownToggle>
                                  <DropdownMenu>
                                  <DropdownItem >TEACHERS</DropdownItem>
                                  <DropdownItem >TEACHERS 2</DropdownItem>
                                  <DropdownItem >TEACHER SINGLE</DropdownItem>
                                  </DropdownMenu>
                              </Dropdown>
                              </NavItem>
                            

                              <NavItem>
                                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter6} onMouseLeave={this.onMouseLeave6} isOpen={this.state.dropdownOpen6} toggle={this.toggle6}>
                                    <DropdownToggle className="dropdowntoggle1">
                                    <NavLink className="nav-link"  to='/home'><b>BLOGS</b></NavLink>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem >BLOGS</DropdownItem>
                                    <DropdownItem >BLOG SINGLE</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                              </NavItem>
                            

                              <NavItem>
                              <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter7} onMouseLeave={this.onMouseLeave7} isOpen={this.state.dropdownOpen7} toggle={this.toggle7}>
                                  <DropdownToggle className="dropdowntoggle1">
                                  <NavLink className="nav-link"  to='/home'><b>SHOP</b></NavLink>
                                  </DropdownToggle>
                                  <DropdownMenu>
                                  <DropdownItem >SHOP</DropdownItem>
                                  <DropdownItem >SHOP SINGLE</DropdownItem>
                                  </DropdownMenu>
                              </Dropdown>
                              </NavItem>
                            
                             
                              <NavItem className="header2-search">
                                <ModalExample/>
                              </NavItem>
                            

                              <NavItem>
                                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter8} onMouseLeave={this.onMouseLeave8} isOpen={this.state.dropdownOpen8} toggle={this.toggle8}>
                                    <DropdownToggle className="dropdowntoggle1">
                                    <NavLink className="nav-link"  to='/home'><b>CONTACT</b></NavLink>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                    <DropdownItem >CONTACT US</DropdownItem>
                                    <DropdownItem >CONTACT US 2</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                              </NavItem>

                            <NavItem>
                              <NavLink className="nav-link"  to='/home'><i className="fa fa-shopping-bag fa-lg"></i></NavLink>
                            </NavItem>

                          </Nav>
                            
                        </Collapse>
                        
                    </div>
                </Navbar>

                {/* <div className="container header2-search">
                  <UncontrolledCollapse toggler="#search">
                      <Search/>
                  </UncontrolledCollapse>
                  
                  
                </div> */}
                
            </div>
        );
    }
}

export default Header2;
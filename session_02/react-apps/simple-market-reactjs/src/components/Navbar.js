import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

import logo from '../assets/img/logo.png';
import ModalLogin from './ModalLogin';
import './Navbar.css';

class NavbarCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      dropOpen: false,
    };
  }

  btLogout = () => {
    localStorage.removeItem('id');
    this.props.keep();
    this.props.state();
  };

  render() {
    let { user, keep } = this.props;
    return (
      <Navbar
        color='faded'
        light
        expand='md'
        className='navbar sticky-top navbar-light bg-light border-bottom mb-2 shadow-sm'
        style={{ paddingLeft: 0 }}
      >
        <NavbarBrand>
          <Link to='/' className='nav-link'>
            <img src={logo} width='80px' />
          </Link>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => this.setState({ collapsed: !this.state.collapsed })}
          className='mr-2'
        />
        <Collapse isOpen={this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link
                to='/product'
                className='nav-link'
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontWeight: 700,
                  color: '#000',
                }}
              >
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to='/about'
                className='nav-link'
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  fontWeight: 700,
                  color: '#000',
                }}
              >
                About
              </Link>
            </NavItem>
            <div style={{ marginLeft: '30vw' }}>
              {user.id ? (
                user.role === 'user' ? (
                  <Dropdown
                    isOpen={this.state.dropOpen}
                    toggle={() =>
                      this.setState({ dropOpen: !this.state.dropOpen })
                    }
                  >
                    <DropdownToggle
                      style={{
                        padding: `5px 30px`,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        backgroundColor: '#363738',
                      }}
                    >
                      {user.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Profile</DropdownItem>
                      <DropdownItem onClick={this.btLogout}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <Dropdown
                    isOpen={this.state.dropOpen}
                    toggle={() =>
                      this.setState({ dropOpen: !this.state.dropOpen })
                    }
                  >
                    <DropdownToggle
                      style={{
                        padding: `5px 30px`,
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        backgroundColor: '#363738',
                      }}
                    >
                      {user.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <Link
                          to='product-admin'
                          style={{ textDecoration: 'none', color: '#16181B' }}
                        >
                          Products Management
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link
                          to=''
                          style={{ textDecoration: 'none', color: '#16181B' }}
                        >
                          Transaction Management
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link
                          to='/slide-admin'
                          style={{ textDecoration: 'none', color: '#16181B' }}
                        >
                          Slide Management
                        </Link>
                      </DropdownItem>
                      <DropdownItem onClick={this.btLogout}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                )
              ) : (
                <>
                  <ModalLogin keep={keep} />
                  <Button
                    color='secondary'
                    style={{
                      padding: '7px 21px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      backgroundColor: '#363738',
                    }}
                  >
                    <Link
                      to='/register'
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                      }}
                    >
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarCom;

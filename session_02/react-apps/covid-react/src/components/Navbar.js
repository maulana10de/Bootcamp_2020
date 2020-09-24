import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class NavbarComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  btCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Navbar
          color='faded'
          light
          expand='md'
          style={{ backgroundColor: '#d0d4d8', marginBottom: '20px' }}
        >
          <NavbarBrand className='mr--auto'>Covid App</NavbarBrand>
          <NavbarToggler
            className='mr-2'
            onClick={this.btCollapse}
          ></NavbarToggler>
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav>
              <NavItem>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/country' className='nav-link'>
                  Country
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/province' className='nav-link'>
                  Province
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;

import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import ModalSignIn from './ModalSignIn';
import ModalSignUp from './ModalSignUp';

const API_URL = 'http://localhost:3004';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbUser: {},
      dropOpen: false,
    };
  }

  componentDidMount() {
    this.keepLogin();
  }

  keepLogin = () => {
    let id = localStorage.getItem('id');
    if (id) {
      Axios.get(API_URL + `/users?id=${id}`)
        .then((res) => {
          console.log('==> keep login success :', res.data);
          this.setState({ dbUser: res.data[0] });
        })
        .catch((err) => {
          console.log('==> keep login error :', err);
        });
    }
  };

  btLogout = () => {
    localStorage.removeItem('id');
    this.setState({ dbUser: {} });
  };

  render() {
    return (
      <div className=' my-2 border-bottom'>
        <div className='row py-3 d-flex align-items-center'>
          <div className='col-12 col-md-4'>Subscribe</div>
          <div className='col-12 col-md-4 text-center'>
            <h1>
              <Link to='/' className='pt-1' style={{ textDecoration: 'none' }}>
                The News
              </Link>
            </h1>
          </div>
          <div className='col-12 col-md-4 d-flex justify-content-end align-items-center'>
            <span className='material-icons mr-2'>search</span>
            {localStorage.getItem('id') ? (
              <Dropdown
                isOpen={this.state.dropOpen}
                toggle={() => this.setState({ dropOpen: !this.state.dropOpen })}
              >
                <DropdownToggle
                  style={{ padding: `3px 30px`, fontSize: '14px' }}
                >
                  {this.state.dbUser.username}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Profile</DropdownItem>
                  <DropdownItem onClick={this.btLogout}>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <>
                <ModalSignIn keep={this.keepLogin} />
                <ModalSignUp keep={this.keepLogin} />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

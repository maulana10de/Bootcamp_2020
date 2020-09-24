import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
            <button className='btn btn-outline-primary btn-sm'>Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

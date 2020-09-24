import React, { Component } from 'react';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className='jumbotron mt-1 mb-4'>
          <h3 className='display-5 text-center'>Welcome</h3>
          <hr className='my-4' />
        </div>
      </>
    );
  }
}

export default Jumbotron;

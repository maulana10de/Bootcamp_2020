import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <>
          <div className='jumbotron mt-1'>
            <h3 className='display-5'>{this.props.title}</h3>
            <p>
              Indonesia International Motor Show (IIMS) 2019 yang berlangsung
              dari 25 April hingga 5 Mei 2019 menyajikan begitu banyak acara
              untuk penggemar roda empat dan roda dua.
            </p>
            <hr className='my-4' />
            <p className='lead'>
              <Link className='btn btn-primary btn-sm' to='#' role='button'>
                Learn more
              </Link>
            </p>
          </div>
        </>
      </Router>
    );
  }
}

export default Jumbotron;

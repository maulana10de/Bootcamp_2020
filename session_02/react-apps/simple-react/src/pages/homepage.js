import React from 'react';
import Jumbotron from '../components/Jumbotron';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;

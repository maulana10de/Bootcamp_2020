import React from 'react';
import IndoInfo from '../components/CardInfoIndonesia';
import WorldInfo from '../components/CardInfoWorld';
import CarouselComp from '../components/Carousel';
import Jumbo from '../components/Jumbotron';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <CarouselComp />
          </div>
          <div className='col-12 col-md-6'>
            <Jumbo />
          </div>
        </div>
        <WorldInfo />
        <hr />
        <IndoInfo />
        <hr />
      </div>
    );
  }
}

export default Home;

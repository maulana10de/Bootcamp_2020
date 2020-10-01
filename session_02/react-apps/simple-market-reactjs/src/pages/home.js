import React from 'react';
import { Jumbotron, Button, CarouselCaption } from 'reactstrap';
import CarouselCom from '../components/Carousel';
import Axios from 'axios';
import { API_URL } from '../assets/path/urls';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
    };
  }

  componentDidMount() {
    this.getCarousel();
  }

  getCarousel = () => {
    Axios.get(API_URL + '/carousels')
      .then((res) => {
        console.log('Get Data Carousel :', res.data);
        this.setState({
          carousel: res.data,
        });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className='display-3'>AdiSport Indonesia</h1>
          <hr className='my-2' />
          <p>
            Through sports, we have the power to change lives. Sports keep us
            fit. They keep us mindful. They bring us together. Athletes inspire
            us.
          </p>
          <p className='lead'>
            <Button color='primary'>Shop Now</Button>
          </p>
        </Jumbotron>
        <CarouselCom carousel={this.state.carousel} />
      </div>
    );
  }
}

export default Homepage;

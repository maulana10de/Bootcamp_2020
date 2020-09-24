import { Typography } from '@material-ui/core';
import Axios from 'axios';
import React from 'react';
import CardRestaurant from '../components/CardRestaurant';
import Jumbotron from '../components/Jumbotron';

const API_URL = 'https://developers.zomato.com/api/v2.1';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbRestaurant: [],
    };
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant = () => {
    Axios.get(API_URL + `/search?start=1&count=20&sort=rating`, {
      headers: {
        'user-key': '08595607e2617e3d31fb689adc1986e1',
      },
    })
      .then((res) => {
        console.log(res.data);
        this.setState({ dbRestaurant: res.data.restaurants });
      })
      .catch((err) => console.log('error:,err'));
  };

  renderRes = () => {
    return this.state.dbRestaurant.map((item, idx) => {
      return (
        <div key={idx}>
          <CardRestaurant data={item} />
        </div>
      );
    });
  };

  render() {
    console.log(this.state.dbRestaurant);
    return (
      <div>
        <Jumbotron />
        <Typography
          variant='h4'
          style={{ textAlign: 'center', margin: '20px' }}
        >
          Restaurant Lists
        </Typography>
        <hr />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {this.renderRes()}
        </div>
      </div>
    );
  }
}

export default Homepage;

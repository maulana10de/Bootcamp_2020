import React, { Component } from 'react';
import Axios from 'axios';

const API_URL = 'https://covid19.mathdro.id';
class WorldInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWorld: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get(API_URL + `/api`)
      .then((res) => {
        console.log(res);
        this.setState({ dataWorld: res.data });
      })
      .catch((err) => {
        console.log(`Error:`, err);
      });
  };

  render() {
    let { dataWorld } = this.state;
    return (
      <div>
        <h2 className='text-center'>Covid-19 World Summary</h2>
        <hr />
        <div className='row text-center'>
          <div className='col-12 col-md-4'>
            <div className='card bg-warning'>
              <div className='card-body'>
                <h5 className='card-title'>Confirmed</h5>
                {dataWorld.confirmed ? (
                  <h2>{dataWorld.confirmed.value.toLocaleString()}</h2>
                ) : (
                  <h3>Waiting</h3>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='card bg-success'>
              <div className='card-body'>
                <h5 className='card-title'>Recovered</h5>
                {dataWorld.recovered ? (
                  <h2>{dataWorld.recovered.value.toLocaleString()}</h2>
                ) : (
                  <h3>Waiting</h3>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4'>
            <div className='card bg-danger'>
              <div className='card-body'>
                <h5 className='card-title'>Deaths</h5>
                {dataWorld.deaths ? (
                  <h2>{dataWorld.deaths.value.toLocaleString()}</h2>
                ) : (
                  <h3>Waiting</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorldInfo;

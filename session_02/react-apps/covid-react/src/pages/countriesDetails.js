import React from 'react';
import Axios from 'axios';
import { API_URL } from '../support/list_url';

// const API_URL = 'https://covid19.mathdro.id';
class CountriesDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
      },
      allData: [],
    };
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail = () => {
    let { params } = this.props.match;
    Axios.get(API_URL + `/api/countries/${params.iso}`)
      .then((res) => {
        console.log('get detail:', res.data);
        let { confirmed, recovered, deaths } = res.data;
        this.getAllDetail(confirmed.detail);
        this.setState({
          detail: {
            confirmed: confirmed.value,
            recovered: recovered.value,
            deaths: deaths.value,
          },
        });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  getAllDetail = (url) => {
    Axios.get(url)
      .then((res) => {
        console.log('get all detail:', res.data);
        this.setState({ allData: res.data });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  renderData = () => {
    return this.state.allData.map((item, idx) => {
      return (
        <tr key={idx}>
          <th>{idx + 1}</th>
          <td>{item.combinedKey}</td>
          <td>{item.confirmed}</td>
          <td>{item.recovered}</td>
          <td>{item.deaths}</td>
          <td>{item.active}</td>
        </tr>
      );
    });
  };

  render() {
    let { params } = this.props.match;
    return (
      <div className='container'>
        <div className='card text-center'>
          <h5 className='card-header'>{params.countries}</h5>
          <div className='card-body'>
            <div className='row'>
              <div className='col-12 col-md-4 mb-2'>
                <div className='card text-center bg-info text-white'>
                  <div className='card-body'>
                    <h5 className='card-title'>Confirmed</h5>
                    <h2>{this.state.detail.confirmed.toLocaleString()}</h2>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4 mb-2'>
                <div className='card text-center bg-success text-white'>
                  <div className='card-body'>
                    <h5 className='card-title'>Recovered</h5>
                    <h2>{this.state.detail.recovered.toLocaleString()}</h2>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='card text-center bg-danger text-white'>
                  <div className='card-body'>
                    <h5 className='card-title'>Deaths</h5>
                    <h2>{this.state.detail.deaths.toLocaleString()}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table className='table table-hover my-2'>
          <thead className='thead-dark'>
            <tr>
              <th>No</th>
              <th>City</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>{this.renderData()}</tbody>
        </table>
      </div>
    );
  }
}

export default CountriesDetail;

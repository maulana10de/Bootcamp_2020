import React from 'react';
import Axios from 'axios';
import CardProvince from '../components/CardProvinsi';
import { API_URL_IDN } from '../support/list_url';

// const API_URL_PROV = 'https://indonesia-covid-19-api.now.sh';
class Province extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvince: [],
    };
  }

  componentDidMount() {
    this.getDataProvinsi();
  }

  getDataProvinsi = () => {
    Axios.get(API_URL_IDN + `/api/provinsi`)
      .then((res) => {
        console.log('get data provinsi:', res.data);
        this.setState({
          dataProvince: res.data.data,
        });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  renderCard = () => {
    return this.state.dataProvince.map((item, idx) => {
      return <CardProvince data={item} idx={idx} />;
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>{this.renderCard()}</div>
      </div>
    );
  }
}

export default Province;

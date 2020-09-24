import React from 'react';
import Axios from 'axios';

const API_URL_IDN = 'https://indonesia-covid-19-api.now.sh';

class CardInfoCorona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIndo: {},
    };
  }

  componentDidMount() {
    this.getDataIndo();
  }

  getDataIndo = () => {
    Axios.get(API_URL_IDN + `/api`)
      .then((res) => {
        console.log('indo', res);
        this.setState({ dataIndo: res.data });
      })
      .catch((err) => {
        console.log(`Error:`, err);
      });
  };

  render() {
    let { dataIndo } = this.state;
    return (
      <div>
        <h5 className='text-center'>Covid-19 Indonesia</h5>
        <hr />
        <div className='row text-center'>
          <div className='col-12 col-md-12 mb-3'>
            <div className='card bg-warning'>
              <div className='card-body'>
                <h5 className='card-title'>Jumlah Kasus</h5>
                {dataIndo.meninggal ? (
                  <h2>{dataIndo.jumlahKasus.toLocaleString()}</h2>
                ) : (
                  <h3>Waiting</h3>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 mb-3'>
            <div className='card bg-secondary'>
              <div className='card-body'>
                <h5 className='card-title'>Perawatan</h5>
                {dataIndo.perawatan ? (
                  <h2>{dataIndo.perawatan.toLocaleString()}</h2>
                ) : (
                  <h3>Waiting</h3>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 mb-3'>
            <div className='card bg-success'>
              <div className='card-body'>
                <h5 className='card-title'>Sembuh</h5>
                {dataIndo.sembuh ? (
                  <h2>{dataIndo.sembuh.toLocaleString()}</h2>
                ) : (
                  <h3>Waiting</h3>
                )}
              </div>
            </div>
          </div>
          <div className='col-12 col-md-12 mb-3'>
            <div className='card bg-danger'>
              <div className='card-body'>
                <h5 className='card-title'>Meninggal</h5>
                {dataIndo.meninggal ? (
                  <h2>{dataIndo.meninggal.toLocaleString()}</h2>
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

export default CardInfoCorona;

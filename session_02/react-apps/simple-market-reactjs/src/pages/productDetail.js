import Axios from 'axios';
import React from 'react';
import { Button, ButtonGroup, Jumbotron } from 'reactstrap';
import { API_URL } from '../assets/path/urls';
// import '../App.css';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      thumbnail: 0,
      total: 0,
    };
  }

  componentDidMount() {
    this.getProductDetail();
  }

  getProductDetail = () => {
    console.log(this.props.location.search);
    Axios.get(API_URL + `/products${this.props.location.search}`)
      .then((res) => {
        console.log('get products:', res);
        this.setState({ detail: res.data[0] });
      })
      .catch((err) => {
        console.log('get error products:', err);
      });
  };

  renderThumbnail = (images) => {
    return images.map((item, index) => {
      return (
        <div
          className='flex-grow-1 select-image'
          onClick={() => this.setState({ thumbnail: index })}
          style={{ padding: '0 1px' }}
        >
          <img src={item} key={index} width='100%' />
        </div>
      );
    });
  };

  renderStock = (stock) => {
    return stock.map((item, index) => {
      return (
        <Button
          style={{
            borderRadius: 0,
          }}
          disabled={item.total === 0 && true}
          key={index}
          onClick={() => this.setState({ total: item.total })}
        >
          {item.code}
        </Button>
      );
    });
  };

  render() {
    let { detail, thumbnail } = this.state;
    return (
      <div className='container'>
        {detail.id && (
          <Jumbotron
            className='row p-3'
            style={{ borderRadius: 0, backgroundColor: '#fff' }}
          >
            <div className='col-12 col-md-5 pr-3 border-right'>
              <img src={detail.images[thumbnail]} width='100%' />
              <div className='d-flex mt-1'>
                {this.renderThumbnail(detail.images)}
              </div>
            </div>
            <div className='col-12 col-md-7'>
              <div>
                <h5
                  style={{
                    fontSize: '16px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {detail.brand} / {detail.category}
                </h5>
                <br />

                <h1
                  style={{
                    fontSize: '52px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    fontStyle: 'italic',
                  }}
                >
                  {detail.name}
                </h1>
                <br />
                <h5
                  style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {detail.colour}
                </h5>
                <br />
                <br />
                <h4
                  style={{
                    fontSize: '16px',
                    letterSpacing: '1.5px',
                    fontWeight: 700,
                  }}
                >
                  Rp.{detail.price.toLocaleString()}
                </h4>
                <h4
                  style={{
                    fontSize: '16px',
                    letterSpacing: '1.5px',
                    lineHeight: '30px',
                  }}
                >
                  {detail.description}
                </h4>
                <br />
                <div>
                  <ButtonGroup>{this.renderStock(detail.stock)}</ButtonGroup>
                  <p
                    style={{
                      fontSize: '12px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      marginTop: '5px',
                    }}
                  >
                    Stock : {this.state.total}
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>
        )}
      </div>
    );
  }
}

// nama, harga, kategori, warna, brand dan deskripsi

export default ProductDetail;

import Axios from 'axios';
import React from 'react';
import { API_URL } from '../assets/path/urls';
import CardProduct from '../components/CardProduct';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbProducts: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    Axios.get(API_URL + `/products`)
      .then((res) => {
        console.log('get products', res.data);
        this.setState({ dbProducts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderProduct = () => {
    return this.state.dbProducts.map((item, index) => {
      return <CardProduct data={item} />;
    });
  };

  render() {
    return <div className='row'>{this.renderProduct()}</div>;
  }
}

export default ProductPage;

import React from 'react';
import CardProduct from '../components/CardProduct';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderProduct = () => {
    let { products } = this.props;
    return products.map((item, index) => {
      return <CardProduct key={index} data={item} />;
    });
  };

  render() {
    return <div className='row'>{this.renderProduct()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer,
  };
};

export default connect(mapStateToProps, { getProducts })(ProductPage);

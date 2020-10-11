import React from 'react';
import CardProduct from '../components/CardProduct';
import { connect } from 'react-redux';
import { getProducts } from '../redux/actions';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import Axios from 'axios';
import { API_URL } from '../assets/path/urls';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbProducts: [],
    };
  }

  btSort = (param, order) => {
    Axios.get(API_URL + `/products?_sort=${param}&_order=${order}`)
      .then((res) => {
        console.log('get product success:', res.data);
        this.props.getProducts(res.data);
      })
      .catch((err) => {
        console.log('get error:', err);
      });
  };

  renderProduct = () => {
    let { products } = this.props;
    return products.map((item, index) => {
      return <CardProduct key={index} data={item} />;
    });
  };

  render() {
    return (
      <div className='row'>
        <div className='col-12'>
          <Dropdown
            isOpen={this.state.dropdownOpen}
            toggle={() =>
              this.setState({ dropdownOpen: !this.state.dropdownOpen })
            }>
            <DropdownToggle caret>Sorting</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.btSort('name', 'asc')}>
                Sort by Name Asc
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.btSort('name', 'desc')}>
                Sort by Name Desc
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <hr />
        </div>

        {this.renderProduct()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer,
  };
};

export default connect(mapStateToProps, { getProducts })(ProductPage);

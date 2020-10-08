import Axios from 'axios';
import React from 'react';
import { Badge, Button, Table } from 'reactstrap';
import { API_URL } from '../assets/path/urls';
import AddProduct from '../components/AddProduct';
import EditProduct from '../components/EditProduct';

class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbProducts: [],
      selectedIdx: null,
      editOpen: false,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = () => {
    Axios.get(API_URL + `/products`)
      .then((res) => {
        console.log('get product success:', res.data);
        this.setState({ dbProducts: res.data });
      })
      .catch((err) => {
        console.log('get error:', err);
      });
  };

  btDelete = (id) => {
    console.log('GET ID DELETE:', id);
    Axios.delete(API_URL + `/products/${id}`)
      .then((res) => this.getProduct())
      .catch((err) => {
        console.log('ERR FROM DELETE:', err);
      });
  };

  renderProduct = () => {
    return this.state.dbProducts.map((item, index) => {
      return (
        <tr key={index}>
          <th>{index + 1}</th>
          <td>
            <img src={item.images[0]} width='90vw' alt={item.name} />
          </td>
          <td>{item.name}</td>
          <td>{item.brand}</td>
          <td>{item.category}</td>
          <td>{item.colour}</td>
          <td>{item.description}</td>
          <td>{this.renderStock(item.stock)}</td>
          <td>Rp.{item.price.toLocaleString()}</td>
          <td>
            <Button
              color='warning'
              onClick={() =>
                this.setState({
                  editOpen: !this.state.editOpen,
                  selectedIdx: index,
                })
              }
              style={{ marginBottom: '5px', padding: '7px 20px' }}
            >
              Edit
            </Button>
            <Button color='danger' onClick={() => this.btDelete(item.id)}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  renderStock = (stock) => {
    return stock.map((item, index) => {
      return (
        <Badge
          key={index}
          style={{ fontSize: '14px', width: '5vw', marginBottom: '2px' }}
        >
          {item.code} = Stock : {item.total}
        </Badge>
      );
    });
  };

  render() {
    return (
      <div>
        <br />
        <h3 className='text-center'>Master Product</h3>
        <AddProduct getProduct={this.getProduct} />
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Colour</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </Table>
        {this.state.selectedIdx !== null && (
          <EditProduct
            getProduct={this.getProduct}
            editOpen={this.state.editOpen}
            editClose={() =>
              this.setState({
                editOpen: !this.state.editOpen,
                selectedIdx: null,
              })
            }
            data={this.state.dbProducts[this.state.selectedIdx]}
          />
        )}
      </div>
    );
  }
}

export default ProductManagement;

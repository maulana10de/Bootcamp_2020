import Axios from 'axios';
import React from 'react';
import { Table, Button } from 'reactstrap';
import { API_URL } from '../assets/path/urls';
import AddCarousel from '../components/AddCarousel';
import EditCarousel from '../components/EditCarousel';

class SlideManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbCarousels: [],
      selectedIdx: null,
      editOpen: false,
    };
  }

  componentDidMount() {
    this.getCarousel();
  }

  getCarousel = () => {
    Axios.get(API_URL + '/carousels')
      .then((res) => {
        console.log('GET CAROUSEL :', res.data);
        this.setState({ dbCarousels: res.data });
      })
      .catch((err) => console.log('ERR GET CAROUSEL :', err));
  };

  renderCarousel = () => {
    return this.state.dbCarousels.map((item, index) => {
      return (
        <tr key={index}>
          <th>{index + 1}</th>
          <td>
            <img src={item.image} width='90vw' />
          </td>
          <td>{item.title}</td>
          <td>
            <Button
              color='warning'
              onClick={() =>
                this.setState({
                  editOpen: !this.state.editOpen,
                  selectedIdx: index,
                })
              }
              style={{ marginBottom: '5px' }}
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

  btDelete = (id) => {
    console.log('GET ID DELETE:', id);
    Axios.delete(API_URL + `/carousels/${id}`)
      .then((res) => this.getCarousel())
      .catch((err) => {
        console.log('ERR FROM DELETE:', err);
      });
  };

  render() {
    return (
      <div>
        <br />
        <h3 className='text-center'>Master Slider</h3>
        <AddCarousel getCarousel={this.getCarousel} />
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderCarousel()}</tbody>
        </Table>
        {this.state.selectedIdx !== null && (
          <EditCarousel
            editOpen={this.state.editOpen}
            editClose={() =>
              this.setState({
                editOpen: !this.state.editOpen,
                selectedIdx: null,
              })
            }
            data={this.state.dbCarousels[this.state.selectedIdx]}
            getCarousel={this.getCarousel}
          />
        )}
      </div>
    );
  }
}

export default SlideManagement;

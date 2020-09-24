import React from 'react';
import Axios from 'axios';
import CardCountry from '../components/CardCountry';
import { API_URL } from '../support/list_url';
import { Pagination } from '../components/Pagination';

class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCountry: [],
      caseCountries: [],
      loading: false,
      currentPage: 1,
      itemsPerPage: 42,
    };
  }

  componentDidMount() {
    this.getDataCountry();
  }

  getDataCountry = () => {
    Axios.get(API_URL + `/api/countries`)
      .then((res) => {
        console.log('get data country:', res.data.countries);
        this.setState({
          dataCountry: res.data.countries,
        });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  renderCard = () => {
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItems = indexOfLastItem - this.state.itemsPerPage;
    const currentItems = this.state.dataCountry.slice(
      indexOfFirstItems,
      indexOfLastItem
    );

    return currentItems.map((item, idx) => {
      return <CardCountry data={item} idx={idx} loading={this.state.loading} />;
    });
  };

  render() {
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    return (
      <div className='container'>
        <div className='row'>
          {this.renderCard()}
          <Pagination
            itemsPerPage={this.state.itemsPerPage}
            totalItems={this.state.dataCountry.length}
            paginate={paginate}
          />
        </div>
      </div>
    );
  }
}

export default Country;

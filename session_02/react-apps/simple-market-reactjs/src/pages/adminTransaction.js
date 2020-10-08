import Axios from 'axios';
import React from 'react';
import { Button, Table } from 'reactstrap';
import { API_URL } from '../assets/path/urls';

class TransactionAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbTransaction: [],
    };
  }

  componentDidMount() {
    this.getTransaction();
  }

  getTransaction = () => {
    Axios.get(API_URL + `/userTransactions`)
      .then((res) => {
        this.setState({ dbTransaction: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  renderTransactions = () => {
    return this.state.dbTransaction.map((item, index) => {
      return (
        <tr key={index} className='text-center'>
          <td>{index + 1}</td>
          <td>{item.date}</td>
          <td>{item.username}</td>
          <td>{item.status.toUpperCase()}</td>
          <td>
            <Button className='mr-1'>Detail</Button>
            <Button
              disabled={item.status !== 'paid' ? true : false}
              onClick={() => {
                this.btConfirm(item.id);
              }}
            >
              Confirm
            </Button>
          </td>
        </tr>
      );
    });
  };

  btConfirm = (id) => {
    Axios.patch(API_URL + `/userTransactions/${id}`, { status: 'Success' })
      .then((res) => {
        this.getTransaction();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Table>
          <thead className='text-center'>
            <th>No</th>
            <th>Date</th>
            <th>Username</th>
            <th>Status</th>
            <th style={{ width: '10vw' }}>Action</th>
          </thead>
          <tbody>{this.renderTransactions()}</tbody>
        </Table>
      </div>
    );
  }
}

export default TransactionAdmin;

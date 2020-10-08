import React from 'react';
import Axios from 'axios';
import { Button, Table } from 'reactstrap';
import Swal from 'sweetalert2';
import { API_URL } from '../assets/path/urls';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbTransaction: [],
    };
  }

  componentDidMount() {
    this.getTransaction();
  }

  // fungsi getTransaction di filter berdasarkan user id,
  // jadi yang akan tampil hanya yang punya user id tersebut
  getTransaction = () => {
    Axios.get(
      API_URL + `/userTransactions?idUser=${localStorage.getItem('id')}`
    )
      .then((res) => {
        console.log('GET SUCCESS GET_TRANSACTION:', res.data);
        this.setState({ dbTransaction: res.data });
      })
      .catch((err) => {
        console.log('GET ERROR GET_TRANSACTION:', err);
      });
  };

  btPayment = (id) => {
    // update menggunakan metode patch, yang hanya mengganti "status" menjadi "paid"
    Axios.patch(API_URL + `/userTransactions/${id}`, { status: 'paid' })
      .then((res) => {
        Swal.fire({
          icon: 'success',
          text: 'Your payment has been successful',
        });
        this.getTransaction();

        console.log('GET SUCCESS BT-PAYMENT:', res.data);
      })
      .catch((err) => {
        console.log('GET ERROR BT-PAYMENT:', err);
      });
  };

  renderTransaction = () => {
    return this.state.dbTransaction.map((item, index) => {
      return (
        <tr key={index} className='text-center'>
          <td>{index + 1}</td>
          <td>{item.date}</td>
          <td>{item.username.toUpperCase()}</td>
          <td>{item.status.toUpperCase()}</td>
          <td>
            <Button className='mr-1'>Detail</Button>
            <Button
              disabled={item.status !== 'unpaid' ? true : false}
              onClick={() => this.btPayment(item.id)}
            >
              Payment
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Your Transaction</h1>
        <hr />
        <Table dark>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Transaction Date</th>
              <th>Name</th>
              <th>Status</th>
              <th style={{ width: '10vw' }}>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTransaction()}</tbody>
        </Table>
      </div>
    );
  }
}

export default Transaction;

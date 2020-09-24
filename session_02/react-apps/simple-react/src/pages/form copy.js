import React from 'react';
import Axios from 'axios';

const API_URL = 'http://localhost:3004';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStaff: [],
    };
  }

  // get daya from API
  getDataStaff = () => {
    Axios.get(API_URL + '/staff')
      .then((res) => {
        console.log('Get Data :', res.data);
        this.setState({
          dataStaff: res.data,
        });
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  };

  componentDidMount() {
    this.getDataStaff();
  }

  // show data to table
  printDataStaff = () => {
    return this.state.dataStaff.map((item, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.position}</td>
          <td>
            <button className='btn btn-warning btn-block btn-sm mr-2'>
              Edit
            </button>
            <button className='btn btn-danger btn-block btn-sm'>Delete</button>
          </td>
        </tr>
      );
    });
  };

  // handle submit
  btSubmit = () => {
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let position = this.refs.position.value;
    if (name === '' || phone === '' || email === '' || password === '') {
      alert('Form tidak boleh kosong');
    } else {
      Axios.post('http://localhost:3004/staff', {
        name: name,
        phone: phone,
        email: email,
        password: password,
        position: position,
      }).then(
        (res) => {
          this.getDataStaff();
        },
        (err) => {
          console.log('error: ', err);
        }
      );
      this.setState({ getDataStaff: this.state.getDataStaff });
    }
  };

  render() {
    console.log(this.state.dataStaff);
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h5 className='lead'>List Staff</h5>
            <hr />
            <div className='col col-md-5 pl-0'>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Name'
                ref='name'
              />
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Phone'
                ref='phone'
              />
              <input
                type='email'
                className='form-control mb-2'
                placeholder='Email'
                ref='email'
              />
              <input
                type='password'
                className='form-control mb-2'
                placeholder='Password'
                ref='password'
              />
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Position'
                ref='position'
              />
              <button
                className='btn btn-primary bt-sm px-5'
                onClick={this.btSubmit}
              >
                Submit
              </button>
            </div>
            <hr />
            <div className='col mt-2 px-0'>
              <table className='table text-center'>
                <thead className='thead-dark'>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.printDataStaff()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

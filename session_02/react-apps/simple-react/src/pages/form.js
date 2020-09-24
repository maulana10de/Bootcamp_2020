import React from 'react';
import Axios from 'axios';
import { Button, Input, Table } from 'reactstrap';

const API_URL = 'http://localhost:3004';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStaff: [],
      dataPosition: [
        'Product Manager',
        'Senior Programmer',
        'Front-end',
        'Back-end',
        'UI/UX',
        'QA',
      ],
      selectedIndex: null,
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
      if (this.state.selectedIndex === i) {
        return (
          <tr>
            <td>#</td>
            <td>
              <Input
                type='text'
                defaultValue={item.name}
                innerRef={(value) => (this.upName = value)}
              />
            </td>
            <td>
              <Input
                type='text'
                defaultValue={item.phone}
                innerRef={(value) => (this.upPhone = value)}
              />
            </td>
            <td>
              <Input
                type='email'
                defaultValue={item.email}
                innerRef={(value) => (this.upEmail = value)}
              />
            </td>
            <td>
              <Input
                type='text'
                defaultValue={item.password}
                innerRef={(value) => (this.upPassword = value)}
              />
            </td>
            <td>
              <Input
                type='select'
                defaultValue={item.position}
                innerRef={(item) => (this.upPosition = item)}
              >
                {this.printPosition()}
              </Input>
            </td>
            <td>
              <Button
                color='primary'
                onClick={() => this.btSave(item.id)}
                className='btn btn-success btn-block btn-sm'
              >
                Save
              </Button>
              <Button
                color='warning'
                onClick={() => {
                  this.setState({ selectedIndex: null });
                }}
                className='btn btn-warning btn-block btn-sm'
              >
                Cancel
              </Button>
            </td>
          </tr>
        );
      }
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.position}</td>
          <td>
            <button
              className='btn btn-warning btn-block btn-sm mr-2'
              onClick={() => this.btEdit(i)}
            >
              Edit
            </button>
            <button
              className='btn btn-danger btn-block btn-sm'
              onClick={() => this.btDelete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  // edit
  btEdit = (idx) => {
    this.setState({ selectedIndex: idx });
  };

  // save
  btSave = (id) => {
    let { selectedIndex, dataStaff } = this.state;
    let name = this.upName.value;
    let phone = this.upPhone.value;
    let email = this.upEmail.value;
    let password = this.upPassword.value;
    let position = this.upPosition.value;

    Axios.put(API_URL + `/staff/${id}`, {
      name,
      phone,
      email,
      password,
      position,
    })
      .then((res) => {
        this.getDataStaff();
        this.setState({ selectedIndex: null });
      })
      .catch((err) => {
        console.log(err);
      });

    // this.setState({ selectedIndex: null, dataStaff });
    alert('Data berhasil disimpan!!');
  };

  // handle submit
  btSubmit = () => {
    let name = this.name.value;
    let phone = this.phone.value;
    let email = this.email.value;
    let password = this.password.value;
    let position = this.position.value;
    if (name === '' || phone === '' || email === '' || password === '') {
      alert('Form tidak boleh kosong');
    } else {
      Axios.post(`${API_URL}/staff`, {
        name: name,
        phone: phone,
        email: email,
        password: password,
        position: position,
      })
        .then((res) => {
          this.getDataStaff();
        })
        .catch((err) => {
          console.log('error: ', err);
        });

      this.setState({ getDataStaff: this.state.getDataStaff });
    }
  };

  // delete
  btDelete = (id) => {
    Axios.delete(`${API_URL}/staff/${id}`)
      .then(() => {
        this.getDataStaff();
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  // print position
  printPosition = () => {
    return this.state.dataPosition.map((item, idx) => {
      return (
        <option key={idx} value={item}>
          {item}
        </option>
      );
    });
  };

  render() {
    console.log(this.state.dataStaff);
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h5 className='lead'>List Staff</h5>
            <div className='col mt-2 px-0'>
              <Table hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>
                      <Input
                        type='text'
                        innerRef={(text) => (this.name = text)}
                      />
                    </th>
                    <th>
                      <Input
                        type='text'
                        innerRef={(item) => (this.phone = item)}
                      />
                    </th>
                    <th>
                      <Input
                        type='text'
                        innerRef={(item) => (this.email = item)}
                      />
                    </th>
                    <th>
                      <Input
                        type='text'
                        innerRef={(item) => (this.password = item)}
                      />
                    </th>
                    <th>
                      <Input
                        type='select'
                        innerRef={(item) => (this.position = item)}
                      >
                        {this.printPosition()}
                      </Input>
                    </th>
                    <th>
                      <Button color='primary' onClick={this.btSubmit}>
                        Submit
                      </Button>
                    </th>
                  </tr>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.printDataStaff()}</tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

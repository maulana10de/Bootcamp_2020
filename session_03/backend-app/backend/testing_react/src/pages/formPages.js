import Axios from 'axios';
import React from 'react';
import { Form, FormGroup, Input, Label, Button, Table } from 'reactstrap';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbData: [],
      selectedId: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      let get = await Axios.get(`http://localhost:4000/data/getData`);
      this.setState({ dbData: get.data });
    } catch (error) {
      console.log(error);
    }
  };

  deleteData = async (param) => {
    try {
      let del = await Axios.delete(
        `http://localhost:4000/data/deleteData/${param}`
      );
      this.setState({ dbData: del.data });
    } catch (error) {
      console.log(error);
    }
  };

  renderData = () => {
    return this.state.dbData.map((item, index) => {
      if (this.state.selectedId === item.id) {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <Input
                type='text'
                defaultValue={item.nama}
                innerRef={(e) => (this.newNama = e)}
              />
            </td>
            <td>
              <Input
                type='text'
                defaultValue={item.email}
                innerRef={(e) => (this.newEmail = e)}
              />
            </td>
            <td>
              <Input
                type='number'
                defaultValue={item.phone}
                innerRef={(e) => (this.newPhone = e)}
              />
            </td>
            <td>
              <Input
                type='textarea'
                defaultValue={item.alamat}
                innerRef={(e) => (this.newAlamat = e)}
              />
            </td>
            <td>
              <Button onClick={this.editDataPatch}>Save</Button>
              <Button
                style={{ margin: '2px' }}
                onClick={() => this.setState({ selectedId: null })}>
                Cancel
              </Button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.nama}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.alamat}</td>
            <td>
              <Button
                style={{ margin: '2px' }}
                onClick={() => this.setState({ selectedId: item.id })}>
                Edit
              </Button>
              <Button onClick={() => this.deleteData(item.id)}>Delete</Button>
            </td>
          </tr>
        );
      }
    });
  };

  addData = async () => {
    try {
      let id = this.state.dbData.length + 1;
      let nama = this.nama.value;
      let email = this.email.value;
      let phone = this.phone.value;
      let alamat = this.alamat.value;

      console.log(id, nama, email, phone, alamat);

      let post = await Axios.post(`http://localhost:4000/data/postData`, {
        id,
        nama,
        email,
        phone,
        alamat,
      });

      this.setState({ dbData: post.data });
    } catch (error) {
      console.log(error);
    }
  };

  editData = async () => {
    try {
      let update = await Axios.put(
        `http://localhost:4000/data/updateDataPut?id=${this.state.selectedId}`,
        {
          id: this.state.selectedId,
          nama: this.newNama.value,
          email: this.newEmail.value,
          phone: this.newPhone.value,
          alamat: this.newAlamat.value,
        }
      );
      this.setState({ dbData: update.data, selectedId: null });
    } catch (error) {
      console.log(error);
    }
  };

  editDataPatch = async () => {
    try {
      let update = await Axios.patch(
        `http://localhost:4000/data/updateDataPatch?id=${this.state.selectedId}`,
        { alamat: this.newAlamat.value }
      );
      this.setState({ dbData: update.data, selectedId: null });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className='container mt-5'>
        <h1>Biodata</h1>
        <hr />
        <Form>
          <FormGroup>
            <Label>Nama</Label>
            <Input
              type='text'
              innerRef={(value) => (this.nama = value)}
              placeholder='Nama Lengkap'
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type='email' innerRef={(value) => (this.email = value)} />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input
              type='number'
              innerRef={(value) => (this.phone = value)}
              placeholder='Phone Number'
            />
          </FormGroup>
          <FormGroup>
            <Label>Alamat</Label>
            <Input
              type='textarea'
              innerRef={(value) => (this.alamat = value)}
              placeholder='Desa/Kecamatan/Kabupaten'
            />
          </FormGroup>
          <Button onClick={this.addData}>Simpan</Button>
        </Form>
        <hr />
        <Table>
          <thead>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Alamat</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderData()}</tbody>
        </Table>
      </div>
    );
  }
}

export default FormPage;

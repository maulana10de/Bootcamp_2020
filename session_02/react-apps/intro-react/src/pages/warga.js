import React from 'react';

class Warga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listBiodata: [
        { nama: 'Jaka', usia: 29, pekerjaan: 'Dokter', alamat: 'Jakarta' },
      ],
      selectedIndex: null,
    };
  }

  btSubmit = () => {
    let nama = this.refs.nama.value;
    let usia = this.refs.usia.value;
    let pekerjaan = this.refs.pekerjaan.value;
    let alamat = this.refs.alamat.value;
    if (nama === '' || usia === '' || pekerjaan === '' || alamat === '') {
      alert('Form tidak boleh kosong');
    } else {
      this.state.listBiodata.push({
        nama: nama,
        usia: usia,
        pekerjaan: pekerjaan,
        alamat: alamat,
      });
      this.setState({ listBiodata: this.state.listBiodata });
    }
  };

  btDelete = (idx) => {
    this.state.listBiodata.splice(idx, 1);
    this.setState({ listBiodata: this.state.listBiodata });
  };

  btEdit = (idx) => {
    this.setState({ selectedIndex: idx });
  };

  btSave = () => {
    let { selectedIndex, listBiodata } = this.state;
    let upNama = this.refs.updateNama.value;
    let upUsia = this.refs.updateUsia.value;
    let upPekerjaan = this.refs.updatePekerjaan.value;
    let upAlamat = this.refs.updateAlamat.value;

    listBiodata[selectedIndex].nama = upNama;
    listBiodata[selectedIndex].usia = upUsia;
    listBiodata[selectedIndex].pekerjaan = upPekerjaan;
    listBiodata[selectedIndex].alamat = upAlamat;

    this.setState({ selectedIndex: null, listBiodata });
    alert('Data berhasil disimpan!!');
  };

  printTableBiodata = () => {
    return this.state.listBiodata.map((item, i) => {
      if (this.state.selectedIndex === i) {
        return (
          <tr>
            <td>#</td>
            <td>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Nama'
                ref='updateNama'
                defaultValue={item.nama}
              />
            </td>
            <td>
              <input
                type='number'
                className='form-control mb-2'
                placeholder='Usia'
                ref='updateUsia'
                defaultValue={item.usia}
              />
            </td>
            <td>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Pekerjaan'
                ref='updatePekerjaan'
                defaultValue={item.pekerjaan}
              />
            </td>
            <td>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Alamat'
                ref='updateAlamat'
                defaultValue={item.alamat}
              />
            </td>
            <td>
              <button
                className='btn btn-success btn-sm btn-block mr-2'
                onClick={this.btSave}
              >
                Save
              </button>
              <button
                className='btn btn-warning btn-block btn-sm mr-2'
                onClick={() => {
                  this.setState({ selectedIndex: null });
                }}
              >
                Cancel
              </button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.nama}</td>
            <td>{item.usia}</td>
            <td>{item.pekerjaan}</td>
            <td>{item.alamat}</td>
            <td>
              <button
                className='btn btn-warning btn-block btn-sm mr-2'
                onClick={() => this.btEdit(i)}
              >
                Edit
              </button>
              <button
                className='btn btn-danger btn-block btn-sm'
                onClick={() => this.btDelete(i)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col'>
            <h5 className='lead'>Data Warga</h5>
            <hr />
            <div className='col col-md-5 pl-0'>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Nama'
                ref='nama'
              />
              <input
                type='number'
                className='form-control mb-2'
                placeholder='usia'
                ref='usia'
              />
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Pekerjaan'
                ref='pekerjaan'
              />
              <textarea
                className='form-control mb-2'
                placeholder='Alamat'
                ref='alamat'
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
                    <th>Usia</th>
                    <th>Pekerjaan</th>
                    <th>Alamat</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.printTableBiodata()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Warga;

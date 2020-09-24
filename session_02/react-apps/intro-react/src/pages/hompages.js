import React from 'react';
import Jumbotron from '../components/Jumbotron';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNama: ['Ade', 'Adnan', 'Alex'],
      angka: 0,
      result: 0,
      listBiodata: [{ nama: 'Jaka', usia: 29, job: 'Dokter' }],
    };
  }

  // increment
  btIncrease = () => {
    alert(this.refs.angkaSatu.value);
    this.setState({
      angka: (this.state.angka += 1),
    });
  };

  // simple calculator
  btTambah = () => {
    let result =
      parseInt(this.refs.angkaSatu.value) +
      parseInt(this.refs.angkaKedua.value);
    this.setState({
      result: result,
    });
  };

  btKurang = () => {
    let result =
      parseInt(this.refs.angkaSatu.value) -
      parseInt(this.refs.angkaKedua.value);
    this.setState({
      result: result,
    });
  };

  btBagi = () => {
    let result =
      parseInt(this.refs.angkaSatu.value) /
      parseInt(this.refs.angkaKedua.value);
    this.setState({
      result: result,
    });
  };

  btKali = () => {
    let result =
      parseInt(this.refs.angkaSatu.value) *
      parseInt(this.refs.angkaKedua.value);
    this.setState({
      result: result,
    });
  };

  // form biodata
  btSubmit = () => {
    // let temp = this.state.listNama;
    // let nama = this.refs.inNama;
    // temp.push(nama);
    // this.setState({ listnama: temp });

    // cara-2
    this.state.listBiodata.push({
      nama: this.refs.inNama.value,
      usia: this.refs.inUsia.value,
      job: this.refs.inJob.value,
    });
    this.setState({ listBiodata: this.state.listBiodata });
    console.log(this.state.listBiodata);
  };

  printNama = () => {
    return this.state.listNama.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
  };

  printNamaTable = () => {
    return this.state.listBiodata.map((item, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.nama}</td>
          <td>{item.usia}</td>
          <td>{item.job}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <Jumbotron title='Motovaganza Sunmori to IIMS 2019 ' />
        <hr />
        <div className='row'>
          <div className='col-4'>
            <input
              type='number'
              className='form-control mb-2'
              placeholder='angka pertama'
              ref='angkaSatu'
            />
            <input
              type='number'
              className='form-control mb-2'
              placeholder='angka kedua'
              ref='angkaKedua'
            />
          </div>
        </div>
        <hr />
        <h5>{this.state.result}</h5>
        <hr />
        <button
          type='button'
          className='btn btn-primary btn-sm mr-2'
          onClick={this.btTambah}
        >
          Pejumlahan
        </button>
        <button
          type='button'
          className='btn btn-primary btn-sm mr-2'
          onClick={this.btKurang}
        >
          Pengurangan
        </button>
        <button
          type='button'
          className='btn btn-primary btn-sm mr-2'
          onClick={this.btBagi}
        >
          Pembagian
        </button>
        <button
          type='button'
          className='btn btn-primary btn-sm mr-2'
          onClick={this.btKali}
        >
          Perkalian
        </button>
        <hr />
        <h5>{this.state.angka}</h5>
        <button
          type='button'
          className='btn btn-primary btn-sm mr-2'
          onClick={this.btIncrease}
        >
          Increase
        </button>
        {/* <Carousel /> */}
        <hr />
        <div className='row'>
          <div className='col-12'>
            <input
              type='text'
              className='form-control mb-2'
              placeholder='Masukan Nama'
              ref='inNama'
            />
            <input
              type='number'
              className='form-control mb-2'
              placeholder='Masukan Usia'
              ref='inUsia'
            />
            <input
              type='text'
              className='form-control mb-2'
              placeholder='Masukan Pekerjaan'
              ref='inJob'
            />
            <hr />
            <button
              type='button'
              className='btn btn-primary btn-sm mr-2'
              onClick={this.btSubmit}
            >
              Submit
            </button>
            <hr />
          </div>
          <table className='table' style={{ width: '50vw' }}>
            <thead className='thead-dark'>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Usia</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>{this.printNamaTable()}</tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Home;

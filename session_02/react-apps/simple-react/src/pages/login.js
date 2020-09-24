import React from 'react';
import { Button, Input, Jumbotron, Label, FormGroup } from 'reactstrap';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const API_URL = 'http://localhost:3004';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
      labelCek: 'Look Password',
      dataLogin: {},
    };
  }

  btLogin = () => {
    let email = this.email.value;
    let password = this.password.value;

    Axios.get(API_URL + `/staff?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data.length === 0) {
          alert('Account anda belum terdaftar!!');
        }
        this.setState({ dataLogin: res.data[0] });
      })
      .catch((err) => {
        console.log('error:', err);
      });
  };

  checkPass = () => {
    console.log(this.see.checked);
    if (this.see.checked) {
      this.setState({ type: 'text', labelCek: 'Hidden Password' });
    } else {
      this.setState({ type: 'password', labelCek: 'Look Password' });
    }
  };

  render() {
    if (this.state.dataLogin.id) {
      return <Redirect to='/' />;
    }
    return (
      <div className='row'>
        <div className='col col-md-4'>
          <Jumbotron>
            <p>Login Page</p>
            <hr />
            <Input
              type='email'
              innerRef={(item) => (this.email = item)}
              className='mb-2'
              placeholder='email'
            ></Input>
            <Input
              type={this.state.type}
              innerRef={(item) => (this.password = item)}
              placeholder='password'
            ></Input>
            <FormGroup check>
              <Input
                type='checkbox'
                name='check'
                id='exampleCheck'
                innerRef={(cek) => (this.see = cek)}
                onClick={this.checkPass}
              />
              <Label for='exampleCheck' check>
                {this.state.labelCek}
              </Label>
            </FormGroup>
            <Button onClick={this.btLogin}>Login</Button>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Login;

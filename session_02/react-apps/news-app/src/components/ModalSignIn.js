import React from 'react';
import Axios from 'axios';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
} from 'reactstrap';

const API_URL = 'http://localhost:3004';
class ModalSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      users: [],
      message: '',
      color: '',
      isOpenTrigger: false,
      success: false,
    };
  }

  btLogin = () => {
    let username = this.username.value;
    let password = this.password.value;

    if (username === '' || password === '') {
      this.setState({
        message: 'Fill in the form',
        color: 'danger',
        isOpenTrigger: !this.state.isOpenTrigger,
      });
    } else {
      let url =
        username.includes('@') || username.includes('.')
          ? `?email=${username}`
          : `?username=${username}`;
      Axios.get(API_URL + `/users` + url + `&password=${password}`)
        .then((res) => {
          localStorage.setItem('id', res.data[0].id);
          this.setState({
            message: 'Your login has been successful',
            color: 'success',
            isOpenTrigger: !this.state.isOpenTrigger,
            success: true,
          });
          this.props.keep();
        })
        .catch((err) => {
          console.log('error user login:', err);
        });
    }
  };

  btToggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    if (this.state.isOpenTrigger) {
      setTimeout(
        () =>
          this.setState({
            isOpenTrigger: !this.state.isOpenTrigger,
            modalOpen: this.state.success ? !this.state.modalOpen : true,
          }),
        1500
      );
    }
    return (
      <div>
        <button
          className='btn btn-outline-primary btn-sm mr-1'
          onClick={this.btToggle}
        >
          Sign In
        </button>

        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Alert color={this.state.color} isOpen={this.state.isOpenTrigger}>
              {this.state.message}
            </Alert>
            <Form>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type='text'
                  innerRef={(item) => (this.username = item)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type='password'
                  innerRef={(item) => (this.password = item)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.btLogin}>
              Sign In
            </Button>
            <Button color='secondary' onClick={this.btToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalSignIn;

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
class ModalSignUp extends React.Component {
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

  btRegister = () => {
    let username = this.username.value;
    let email = this.email.value;
    let password = this.password.value;
    let confpassword = this.confpassword.value;

    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confpassword === ''
    ) {
      this.setState({
        message: 'Fill in the form',
        color: 'danger',
        isOpenTrigger: !this.state.isOpenTrigger,
      });
    } else {
      if (password === confpassword) {
        Axios.get(API_URL + `/users?username=${username.toLowerCase()}`)
          .then((res) => {
            if (res.data.length !== 0 && username.toLowerCase()) {
              this.setState({
                message: 'username already registered',
                color: 'danger',
                isOpenTrigger: !this.state.isOpenTrigger,
              });
            } else {
              Axios.post(API_URL + `/users`, {
                username,
                email,
                password,
              })
                .then((res) => {
                  this.setState({
                    message: 'Your registration has been successful',
                    color: 'success',
                    isOpenTrigger: !this.state.isOpenTrigger,
                    success: true,
                  });
                  localStorage.setItem('id', res.data.id);
                })
                .catch((err) => {
                  console.log('error user register:', err);
                });
            }
          })
          .catch((err) => {
            console.log('error user register:', err);
          });
      } else {
        this.setState({
          message: 'Your password not match',
          color: 'warning',
          isOpenTrigger: !this.state.isOpenTrigger,
        });
      }
    }
  };

  btToggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  render() {
    if (this.state.isOpenTrigger) {
      setTimeout(() => {
        this.setState({
          isOpenTrigger: !this.state.isOpenTrigger,
          modalOpen: this.state.success ? !this.state.modalOpen : true,
        });
        this.props.keep();
      }, 1500);
    }
    return (
      <div>
        <button
          className='btn btn-outline-primary btn-sm'
          onClick={this.btToggle}
        >
          Sign Up
        </button>

        <Modal isOpen={this.state.modalOpen}>
          <ModalHeader>Register</ModalHeader>
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
                <Label>email</Label>
                <Input type='email' innerRef={(item) => (this.email = item)} />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type='password'
                  innerRef={(item) => (this.password = item)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password Confirmation</Label>
                <Input
                  type='password'
                  innerRef={(item) => (this.confpassword = item)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.btRegister}>
              Register Now!
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

export default ModalSignUp;

import Axios from 'axios';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { API_URL } from './assets/path/urls';
import Footer from './components/Footer';
import NavbarCom from './components/Navbar';
import AboutPage from './pages/about';
import Homepage from './pages/home';
import Notfound from './pages/notfound';
import ProductPage from './pages/product';
import ProductDetail from './pages/productDetail';
import ProductManagement from './pages/productManagement';
import RegisterPage from './pages/register';
import SlideManagement from './pages/slideManagement';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {},
    };
  }

  componentDidMount() {
    this.keepLogin();
  }

  keepLogin = () => {
    let id = localStorage.getItem('id');
    if (id) {
      Axios.get(API_URL + `/users?id=${id}`)
        .then((res) => {
          console.log(res);
          this.setState({ dataUser: res.data[0] });
        })
        .catch((err) => {
          console.log('keep login error :', err);
        });
    }
  };

  render() {
    let { dataUser } = this.state;
    console.log('role :', dataUser.role);
    return (
      <div className='container'>
        <NavbarCom
          user={this.state.dataUser}
          keep={this.keepLogin}
          state={() => this.setState({ dataUser: {} })}
        />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/product' component={ProductPage} />
          <Route path='/product-detail' component={ProductDetail} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/about' component={AboutPage} />

          {dataUser.role && dataUser.role === 'admin' ? (
            <>
              <Route path='/product-admin' component={ProductManagement} />
              <Route path='/slide-admin' component={SlideManagement} />
            </>
          ) : null}

          <Route path='*' component={Notfound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

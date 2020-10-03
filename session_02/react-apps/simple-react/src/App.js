import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/404';
import Form from './pages/form';

import Home from './pages/homepage';
import Login from './pages/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='container mt-2'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/form' component={Form} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

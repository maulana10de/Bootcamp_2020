import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepages';
import Navbar from './components/Navbar';
import NotFound from '../src/pages/notFound';
import { Container } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Container fixed>
          <Navbar title='Halo World!' />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;

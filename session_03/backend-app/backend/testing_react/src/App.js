import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import FormPage from './pages/formPages';

class App extends React.Component {
  render() {
    return <Route path='/form' component={FormPage} exact />;
  }
}

export default App;

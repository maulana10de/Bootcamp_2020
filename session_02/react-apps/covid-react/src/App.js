import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CountriesDetail from './pages/countriesDetails';
import Country from './pages/countrypage';
import Home from './pages/Homepage';
import NotFound from './pages/not404';
import Province from './pages/provincepage';

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
          <Route path='/province' component={Province} />
          <Route path='/country' component={Country} />
          <Route
            path='/countries-detail/:countries/:iso'
            component={CountriesDetail}
          />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

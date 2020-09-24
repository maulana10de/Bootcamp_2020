import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/hompages';
import Navbar from './components/Navbar';
import NotFound from './components/404';
import NewsDetail from './pages/newsDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className='container mt-2'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/newsDetail' component={NewsDetail} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

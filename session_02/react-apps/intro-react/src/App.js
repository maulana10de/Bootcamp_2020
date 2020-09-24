import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/hompages';
import Profile from './pages/profile';
import Navbar from './components/Navbar';
import Warga from './pages/warga';

class App extends React.Component {
  // getInitialState & getDefaultProps
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className='container mt-2'>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/warga' component={Warga} />
          <Route path='/profile' component={Profile} />
        </div>
      </>
    );
  }
}

export default App;

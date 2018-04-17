import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'; 
import LogInComponent from './components/LogInComponent/LogInComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LogInComponent} />
        <Route path="/registracija" exact component={RegisterComponent} />
      </div>
    );
  }
}

export default App;

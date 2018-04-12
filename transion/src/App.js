import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'; 
import LogInComponent from './components/LogInComponent/LogInComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LogInComponent} />
      </div>
    );
  }
}

export default App;

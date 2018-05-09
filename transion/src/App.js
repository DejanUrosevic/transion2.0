import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom'; 
import LogInComponent from './components/LogInComponent/LogInComponent';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';

class App extends Component {
  render() {
    const t = localStorage.getItem("token");
    return (
      <div>
        <Route path="/" exact component={LogInComponent} />
        <Route path="/registracija" exact component={RegisterComponent} />
        <Route path="/home" exact component={() => (
          t !== null ? <HomeComponent /> : <Redirect to="/" />
        )} />
      </div>
    );
  }
}

export default App;

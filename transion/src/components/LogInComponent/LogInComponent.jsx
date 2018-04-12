import React, { Component } from 'react';
import LogInForm from './LogInForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LogInComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="center animated fadeIn delay-1.1s">

                        <div align="center">
                            <figure className="logo">
                                <img src="/images/Transion2_logo.png" className="img-circle img-responsive" alt="" height="150px" width="150px" />
                            </figure>
                            <h2> Prijavi se </h2>
                        </div>

                        <hr  />
                            <LogInForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default LogInComponent;

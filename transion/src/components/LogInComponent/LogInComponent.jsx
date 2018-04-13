import React, { Component } from 'react';
import LogInForm from './LogInForm';
import './LogInStyle.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {login} from '../../actions/userAction';

class LogInComponent extends Component {

    login = data => {
        console.log(data);
        this.props.login(data);
    }

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

                        <hr className="login_type" />
                        <LogInForm submit={this.login}/>
                    </div>
                </div>
            </div>
        )
    }
}

LogInComponent.propTypes = {
    login : PropTypes.func.isRequired
  };

export default connect(null, {login})(LogInComponent);

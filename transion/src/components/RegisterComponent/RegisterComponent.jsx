import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RegisterStyle.css';
import {connect} from 'react-redux';
import RegisterForm from './RegisterForm';
import Container from 'muicss/lib/react/container';
import {Scrollbars} from 'react-custom-scrollbars';

class RegisterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            autoHide : true
        }        
    }

    render() { 
        
        return ( 
            <Container>
               
                        <div className="row">
                            <div className="center animated fadeIn delay-1.1s" >
                                <div align="center">
                                    <figure className="logo">
                                        <img src="/images/Transion2_logo.png" className="img-circle img-responsive" height="150px" width="150px" />
                                    </figure>
                                    <h2> Registracija </h2>
                                </div>

                                <hr className="login_type" />
                                <Scrollbars 
                                    autoHide={this.state.autoHide}
                                    style={{height:'300px'}}>
                                    <RegisterForm />
                                </Scrollbars>
                            </div>
                        </div>
                   
                
            </Container>
        )
    }
}
 
RegisterComponent.propTypes = {
}

export default connect(null, {})(RegisterComponent);
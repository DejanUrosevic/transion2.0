import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomeStyle.css';
import { connect } from 'react-redux';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

class HomeComponent extends Component {
    
    constructor(props) {
        super(props);
        

    }

    componentDidMount() {

    }

    redirect = () => {
        
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="container">
                    <div className="row animated fadeIn delay-1.1s">
                        <div className="col-5 col-offset-1 col-sm-5 col-sm-offset-1 col-md-5 col-md-offset-1 col-lg-5 col-lg-offset-1 col-xl-12">
                            <div className="home-content">
                                <div className="row">
                                    <div className="col-5 col-offset-4 col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-4 col-lg-5 col-lg-offset-4 col-xl-12">
                                        <figure className="pic">
                                            <img src="/images/Transion2_logo.png" className="img-circle img-responsive" height="200px" width="200px" />
                                        </figure>
                                    </div>
                                </div>
                                <hr className="login_type" />
                                <div className="row">
                                    <div className="col-5 col-offset-4 col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-4 col-lg-5 col-lg-offset-4 col-xl-12">
                                        <h1> Dobrodošli
                                            <i> Marko </i>
                                        </h1>
                                    </div>
                                </div>
                                <div className="home-welcome-text">
                                    as hdjsah das hdasohadouih saoh dsa hsaohdsao dsajdasdasasdsahdoid
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

HomeComponent.propTypes = {

}

export default connect(null, {})(HomeComponent);
 
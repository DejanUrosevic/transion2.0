import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout, findUserByMail } from '../../actions/userAction';
import './HeaderStyle.css';
import { withRouter } from 'react-router';
import RcIf, {RcElse} from 'rc-if';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            userOptions: false
        }
    }

    componentDidMount() {
        var self = this;
        this.props.findUserByMail(localStorage.getItem("username"))
        .then(function(response){
            self.setState({"user": response});
        });
    }

    logout = () => {
        console.log(this.props);
        this.props.history.push("/");
    }

    switchUserOptions = () => {
        var value = !this.state.userOptions;
        this.setState({userOptions: value});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm sticky-top animated fadeInDown">
                <div className="navbar-content">
                    <a className="navbar-brand">Transion</a>
                    <RcIf if={!this.state.userOptions}>
                        <ul className="nav navbar-nav navbar-right main-nav animated fadeInRight">
                            <li>
                                <a>
                                    <i className="fa fa-file-text-o" aria-hidden="true"> Fakture </i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-barcode" aria-hidden="true"> Fiskalni račun </i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-medkit" aria-hidden="true"> Zdravstvene knjižice </i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-suitcase" aria-hidden="true"> Moja agencija </i>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="fa fa-user-o" aria-hidden="true" onClick={this.switchUserOptions}> {this.state.user.firstname}</i>
                                </a>
                            </li>
                        </ul>
                        <RcElse>
                            <ul className="nav navbar-nav navbar-right main-nav animated fadeInRight">
                                <li>
                                    <a>
                                        <i className="fa fa-info" aria-hidden="true"> Profilne informacije </i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa fa-sign-out" aria-hidden="true" onClick={this.logout}> Odjavi se </i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="fa fa-arrow-left" aria-hidden="true" onClick={this.switchUserOptions}> Nazad </i>
                                    </a>
                                </li>
                            </ul>
                        </RcElse>
                    </RcIf>
                    
                </div>
            </nav>
        )
    }
}

HeaderComponent.propTypes = {
    logout : PropTypes.func.isRequired,
    findUserByMail : PropTypes.func.isRequired
};

export default connect(null, {logout, findUserByMail})(HeaderComponent);
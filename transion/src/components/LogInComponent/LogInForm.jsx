import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class LogInForm extends Component {
    
    state = {
        data: {
            username: '',
            password: ''
        }
    }

    onChange = e =>
        this.setState({
            data : { ...this.state.data, [e.target.name] : e.target.value}
        });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.data);
        /*if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }*/
    }

    goOnSingUp = (e) => {
        e.preventDefault();
        this.props.goOnSingUp();
    }

    render() {
        const { data } = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <TextField
                        required
                        id="username"
                        type="username"
                        name="username"
                        label="Username"
                        placeholder="example@transion.com"
                        margin="normal"
                        value={data.username}
                        onChange={this.onChange}
                /><br />   
                <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    margin="normal"
                    value={data.password}
                    onChange={this.onChange}
                /> <br />  
                <div align="center">
                    <Button 
                        type="submit"
                        variant="raised" 
                        color="primary" 
                        >Prijavi se
                    </Button>

                    <hr className="login_type" />

                    <p style={{marginTop: '20px'}}> Nemate nalog?
                        <a onClick={this.goOnSingUp}> Napravite ga sada.</a>
                    </p>
                </div>
            </Form>
        )
    }
}

LogInForm.propTypes = {
    submit : PropTypes.func.isRequred,
    goOnSingUp : PropTypes.func.isRequired
}
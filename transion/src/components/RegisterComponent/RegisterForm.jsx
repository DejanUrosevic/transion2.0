import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
//import Button from 'material-ui/Button';
import Button from 'muicss/lib/react/button';
import PropTypes from 'prop-types';

export default class RegisterForm extends Component {
    state = {
        data :{
            firstname: '',
            lastname: '',
            username: '',
            parentsName: '',
            citizenship: '',
            sex: '',
            education: '',
            password: '',
            jmbg: '',
            email: '',
            phoneNumber: ''
        },
        potvrdaLozinka: ''

    };

    onChange = e =>
        this.setState({
            data : { ...this.state.data, [e.target.name] : e.target.value}
        });
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.data + " : " + this.state.potvrdaLozinka);
    }

    render() { 
        const {data, potvrdaLozinka} = this.state;
        return (  
            <Form onSubmit={this.onSubmit}> 
                <div>
                    <TextField
                        required
                        id="firstname"
                        name="firstname"
                        label="Ime"
                        margin="normal"
                        value={data.firstname}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="parentsName"
                        name="parentsName"
                        label="Ime roditelja"
                        margin="normal"
                        value={data.parentsName}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="lastname"
                        name="lastname"
                        label="Prezime"
                        margin="normal"
                        value={data.lastname}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="citizenship"
                        name="citizenship"
                        label="Državljanstvo"
                        margin="normal"
                        value={data.citizenship}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="sex"
                        name="sex"
                        label="Pol"
                        margin="normal"
                        value={data.sex}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="education"
                        name="education"
                        label="Obrazovanje"
                        margin="normal"
                        value={data.education}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="jmbg"
                        name="jmbg"
                        label="JMBG"
                        margin="normal"
                        value={data.jmbg}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="E-mail"
                        margin="normal"
                        value={data.email}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Telefon"
                        margin="normal"
                        value={data.phoneNumber}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="lozinka"
                        name="password"
                        label="Lozinka"
                        placeholder="Lozinka"
                        margin="normal"
                        value={data.password}
                        onChange={this.onChange}
                    /><br />
                    <TextField
                        required
                        id="potvrdaLozinka"
                        name="potvrdaLozinka"
                        label="Potvrda lozinke"
                        placeholder="Potvrda lozinke"
                        margin="normal"
                        value={potvrdaLozinka}
                        onChange={(e) => {
                            e.preventDefault();
                            this.setState({
                                potvrdaLozinka :  e.target.value
                            });
                        }}
                    /><br />
                </div>
                <div style={{marginTop: '30px'}} align="center">
                    <Button 
                        type="submit"
                        variant="raised" 
                        color="primary" >Registruj se
                    </Button>
                </div> 
            </Form>
        )
    }
}
 
RegisterForm.propTypes = {
}


import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
//import Button from 'material-ui/Button';
import Button from 'muicss/lib/react/button';
import PropTypes from 'prop-types';

export default class RegisterForm extends Component {
    state = {
        step1 : true,
        step2 : false,
        data : {
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
            phoneNumber: '',
            address: {
                country: '',
	            city: '',
                street: '',
                streetNumber: '',
                zipCode: ''
            }
        },
        potvrdaLozinka: ''

    };

    onChange = e =>
        this.setState({
            data : { ...this.state.data, [e.target.name] : e.target.value}
        });

    onChangeAddress = e =>{
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let statusCopy = Object.assign({}, this.state);
        statusCopy.data.address[inputName] = inputValue;
        this.setState(statusCopy);
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.registration(this.state.data);
        console.log(this.state.data + " : " + this.state.potvrdaLozinka);
    };

    nextStep = () => {
        this.setState({
            step1: false,
            step2: true
        });
    };

    render() { 
        const {data, potvrdaLozinka} = this.state;
        return (  
            <Form onSubmit={this.onSubmit}> 
                {this.state.step1 ? 
                <div>
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
                            type="button"
                            variant="raised" 
                            color="primary" 
                            onClick={this.nextStep}>Sledeći korak
                        </Button>
                    </div> 
                </div> : null}
                {this.state.step2 ? 
                <div>
                    <div>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Država"
                            placeholder="Država"
                            margin="normal"
                            value={data.address.country}
                            onChange={this.onChangeAddress}
                        /><br />
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="Grad"
                            placeholder="Grad"
                            margin="normal"
                            value={data.address.city}
                            onChange={this.onChangeAddress}
                        /><br />
                        <TextField
                            required
                            id="street"
                            name="street"
                            label="Ulica"
                            placeholder="Ulica"
                            margin="normal"
                            value={data.address.street}
                            onChange={this.onChangeAddress}
                        /><br />
                        <TextField
                            required
                            id="streetNumber"
                            name="streetNumber"
                            label="Broj"
                            placeholder="Broj"
                            margin="normal"
                            value={data.address.streetNumber}
                            onChange={this.onChangeAddress}
                        /><br />
                        <TextField
                            required
                            id="zipCode"
                            name="zipCode"
                            label="Poštanski broj"
                            placeholder="Poštanski broj"
                            margin="normal"
                            value={data.address.zipCode}
                            onChange={this.onChangeAddress}
                        /><br />
                    </div> 
                    <div style={{marginTop: '30px'}} align="center">
                        <Button 
                            type="submit"
                            variant="raised" 
                            color="primary" >Registruj se
                        </Button>
                    </div> 
                </div> : null}
            </Form>
        )
    }
}
 
RegisterForm.propTypes = {
    registration : PropTypes.func.isRequired
}


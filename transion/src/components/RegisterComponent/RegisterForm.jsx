import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class RegisterForm extends Component {
    state = {
        step1 : true,
        step2 : false,
        step3 : false,
        data :{
            email: '', 
            password: '',
            potvrdaLozinka: '',
            agencyName: '',
            agencyFullName: '',
            pib: '',
            agencyUniqueNumber: '',
            agencyAccountNumber: '',
            agencyCodeActivity: '',
            dateOfRegistration: '',
            address: '',
            street: '',
            streetNumber: '',
            phone: '',
            agencyEmail: ''
        }

    };

    onChange = e =>
        this.setState({
            data : { ...this.state.data, [e.target.name] : e.target.value}
        });

    goStepTwo = () => {
        this.setState({
            step1 : false,
            step2 : true
        })
    }

    render() { 
        const {data} = this.state;
        return (  
            <div>
                { this.state.step1 ? 
                <div>
                    <div>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            placeholder="example@transion.com"
                            margin="normal"
                            value={data.email}
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
                            id="potvrdaLozinke"
                            name="potvrdaLozinke"
                            label="Potvrda lozinke"
                            placeholder="Potvrda lozinke"
                            margin="normal"
                            value={data.potvrdaLozinka}
                            onChange={this.onChange}
                        /><br />
                    </div>
                    <div align="center">
                        <Button 
                            type="submit"
                            variant="raised" 
                            color="primary" 
                            onClick={this.goStepTwo}>Sledeci korak
                        </Button>
                    </div>
                    <div style={{marginTop: '30px'}} align="center">
                        <Button 
                            type="submit"
                            variant="raised" 
                            color="primary" >Nazad
                        </Button>
                    </div> 
                </div>
                : null }

                {this.state.step2 ?
                <div>
                    <div>
                        <TextField
                            required
                            id="agencyName"
                            name="agencyName"
                            label="Naziv agencije"
                            placeholder="Naziv agencije"
                            margin="normal"
                            value={data.agencyName}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="agencyFullName"
                            name="agencyFullName"
                            label="Put naziv agencije"
                            placeholder="Pun naziv agencije"
                            margin="normal"
                            value={data.agencyFullName}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="pib"
                            name="pib"
                            label="PIB"
                            placeholder="PIB"
                            margin="normal"
                            value={data.pib}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="agencyUniqueNumber"
                            name="agencyUniqueNumber"
                            label="Matični broj agencije"
                            placeholder="Matični broj agencije"
                            margin="normal"
                            value={data.agencyUniqueNumber}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="agencyAccountNumber"
                            name="agencyAccountNumber"
                            label="Broj žiro računa"
                            placeholder="Broj žiro računa"
                            margin="normal"
                            value={data.agencyAccountNumber}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="agencyCodeActivity"
                            name="agencyCodeActivity"
                            label="Šifra delatnosti sa opisom"
                            placeholder="Šifra delatnosti sa opisom"
                            margin="normal"
                            value={data.agencyCodeActivity}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="dateOfRegistration"
                            name="dateOfRegistration"
                            label="Datum registracije agencije"
                            placeholder="Datum registracije agencije"
                            margin="normal"
                            value={data.dateOfRegistration}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Grad i poštanski broj"
                            placeholder="Grad i poštanski broj"
                            margin="normal"
                            value={data.address}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="street"
                            name="street"
                            label="Ulica sedišta"
                            placeholder="Ulica sedišta"
                            margin="normal"
                            value={data.street}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="streetNumber"
                            name="streetNumber"
                            label="Broj sedišta"
                            placeholder="Broj sedišta"
                            margin="normal"
                            value={data.streetNumber}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="phone"
                            name="phone"
                            label="Telefon"
                            placeholder="Telefon"
                            margin="normal"
                            value={data.phone}
                            onChange={this.onChange}
                        /><br />
                        <TextField
                            required
                            id="agencyEmail"
                            name="agencyEmail"
                            label="Email agencije"
                            placeholder="Email agencije"
                            margin="normal"
                            value={data.agencyEmail}
                            onChange={this.onChange}
                        /><br />
                    </div>
                    <div align="center">
                        <Button 
                            type="submit"
                            variant="raised" 
                            color="primary" 
                            onClick={this.goStepTwo}>Sledeci korak
                        </Button>
                    </div>
                    <div style={{marginTop: '30px'}} align="center">
                        <Button 
                            type="submit"
                            variant="raised" 
                            color="primary" >Nazad
                        </Button>
                    </div>
                </div>
                : null }
            </div>
        )
    }
}
 
export default RegisterForm;


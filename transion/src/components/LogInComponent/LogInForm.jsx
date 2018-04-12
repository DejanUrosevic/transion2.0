import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

export default class LogInForm extends Component {
    render() {
        return (
            <div>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        defaultValue=""
                        margin="normal"
                    /><br />               
            </div>
        )
    }
}

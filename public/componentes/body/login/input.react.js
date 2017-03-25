import React from 'react';

export default class Input extends React.Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <i className="small material-icons prefix">perm_identity</i>   
                        <label htmlFor="txtCedula_login">
                            Usuario
                        </label>
                        <input id="txtCedula_login" placeholder='Cedula/Pasaporte' type='text' name="username"/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <i className="small material-icons prefix">lock_outline</i>
                        <label htmlFor="txtPassword_login">
                            Contraseña
                        </label>
                        <input id="txtPassword_login" placeholder='Contraseña' type='password' name="password"/>
                    </div>
                </div>
            </div>
        );
    }
}
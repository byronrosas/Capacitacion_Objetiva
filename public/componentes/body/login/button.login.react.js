import React from 'react';

export default class Button_Login extends React.Component {
    render () {
        return (
            <div className="row center-align btn-login">
                <div className="input-field col s12">
                    <button id='btnValidar_login' className="btn btn-large waves-effect green" type="submit" value="Submit">
                        Entrar
                    </button>
                </div>
            </div>
        );
    }
}
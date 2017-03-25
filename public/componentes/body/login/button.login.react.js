import React from 'react';
import { Link } from 'react-router-dom';

export default class Button_Login extends React.Component {
    render () {
        return (
            <div className="row center-align btn-login">
                <div className="input-field col s12">
                    <Link id='unmount' to="/perfil" className="btn btn-large waves-effect green">Entrar</Link>
                </div>
            </div>
        );
    }
}
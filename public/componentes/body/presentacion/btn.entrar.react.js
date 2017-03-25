import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Button_Entrar extends React.Component {
    render () {
        return (
            <div className='center'>
                <NavLink id='btnEntrar' className='btn waves-effect waves-light white black-text' to="/login">
                    ENTRAR
                </NavLink>
            </div>
        );
    }
}
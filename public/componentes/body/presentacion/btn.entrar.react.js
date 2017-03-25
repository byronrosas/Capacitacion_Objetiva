import React from 'react';

export default class Button_Entrar extends React.Component {
    render () {
        return (
            <div className='center'>
                <a id='btnEntrar' className='btn waves-effect waves-light white black-text' href="/login">
                    ENTRAR
                </a>
            </div>
        );
    }
}
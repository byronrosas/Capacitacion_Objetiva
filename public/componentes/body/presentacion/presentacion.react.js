import React from 'react';

import Texto_presentacion from './texto.react';
import Button_Entrar from './btn.entrar.react';

export default class Presentacion extends React.Component {
    render() {
        return (
            <div className=' presentacion row'>
                <div className='col s1 m2 l2'></div>
                <div className='col s10 m8 l8'>
                    <Texto_presentacion />
                    <Button_Entrar />
                </div>
                <div className='col s1 m2 l2'></div>
            </div>
        );
    }
}
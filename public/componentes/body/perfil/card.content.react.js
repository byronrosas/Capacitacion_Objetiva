import React from 'react';

import Texto from './text.content.react';
import Form_Edit from './editar_perfil/body.react';

export default class Card_Content extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        let DatosNombre = ['Tipo de Usuario', 'Tipo de Rol'];
        let DatosCedula = ['0504121344', 'Cédula'];
        let DatosEmail = ['mail@domain.com', 'E-mail'];
        let DatosTelefono = ['0999999999', 'Teléfono'];
        
        return (
            <div className="card-content">
                <div id='ViewPerfil'>
                    <div className="row">
                        <Texto data={DatosNombre}/>
                        <Texto data={DatosCedula}/>
                    </div>
                    <div className="row">
                        <Texto data={DatosEmail}/>
                        <Texto data={DatosTelefono}/>
                    </div>
                </div>
                <br/>
                <br/>
                <div id='EditPerfil' className='hide'>
                    <Form_Edit/>
                </div>
            </div>
        );
    }
}
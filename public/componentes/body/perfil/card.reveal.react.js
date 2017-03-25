import React from 'react';

import Texto_Reveal from './text.reveal.react';
import Texto_Reveal_Two from './text.two.reveal.react';

export default class Card_Reveal extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        let TipoUsuario = [ 'tipoUsuario card-title responsive-text', 'Tipo de Usuario', 'material-icons right', 'cancel' ];
        let TipoRol = [ 'cyan-text text-darken-2', 'Tipo de Rol', 'icon material-icons left',  'person_outline' ];
        let Telefono = [ 'cyan-text text-darken-2', '+593 999999999', 'icon material-icons left', 'local_phone' ];
        let Email = [ 'cyan-text text-darken-2', 'mail@domain.com', 'icon material-icons left', 'mail' ];
        let Cedula = [ 'cyan-text text-darken-2', '0504121344', 'icon material-icons left', 'payment' ];
        let Direccion = [ 'cyan-text text-darken-2', 'Localización', 'icon material-icons left', 'location_city' ];

        return (
            <div className="card-reveal">
                <p>
                    <Texto_Reveal text={TipoUsuario}/>
                    <Texto_Reveal text={TipoRol}/>
                </p>
                <Texto_Reveal_Two txt={Telefono}/>
                <Texto_Reveal_Two txt={Email}/>
                <Texto_Reveal_Two txt={Cedula}/>
                <Texto_Reveal_Two txt={Direccion}/>
            </div>
        );
    }
}
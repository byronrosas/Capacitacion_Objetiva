import React from 'react';

import Button from './buttons/button.react';
import Input_Cursos from './inputs/cursos/form.crear.react';
import Input_Proveedores from './inputs/proveedores/form.crear.react';

export default class Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let modal = this.props.modal;
        let input = this.props.input;
        let tab = this.props.tab;
        let resultado = null;

        if (tab == 1) { resultado = <Input_Cursos data={input}/>; }
        else if(tab == 2) { resultado = <Input_Proveedores data={input}/>; }

        const name_div = modal[0];
        const div_ref = modal[1];
        const title = modal[2];
        const Guardar = ['Guardar', 'btn btn-flat waves-effect waves-light green darken-4 white-text', 'save'];
        const Regresar = ['Regresar', 'modal-action modal-close waves-effect waves-green btn-flat', 'reply'];

        return (
            <div id={name_div} className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4 className='center'>Crear {title}</h4>
                    {resultado}
                </div>
                <div className="modal-footer">
                    <Button data={Guardar} />
                    <Button data={Regresar} />
                </div>
            </div>
        );
    }
}

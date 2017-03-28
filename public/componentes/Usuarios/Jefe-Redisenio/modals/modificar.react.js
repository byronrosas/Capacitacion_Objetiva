import React from 'react';

import Button from './buttons/button.react';
import Input_Cursos_Edit from './inputs/cursos/form.modificar.react';
import Input_Proveedores_Edit from './inputs/proveedores/form.modificar.react';

export default class Modificar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let modal = this.props.modal;
        let input = this.props.input;
        let tab = this.props.tab;
        let resultado = null;

        if (tab == 1) { resultado = <Input_Cursos_Edit data={input}/>; }
        else if(tab == 2) { resultado = <Input_Proveedores_Edit data={input}/>; }

        const name_div = modal[0];
        const div_ref = modal[1];
        const title = modal[2];
        const Modificar = ['Modificar', 'btn btn-flat waves-effect waves-light green darken-4 white-text', 'save'];
        const Regresar = ['Regresar', 'modal-action modal-close waves-effect waves-green btn-flat', 'reply'];
        
        return (
            <div>
                <a href='#'className="secondary-content">
                    <i className="material-icons">delete</i>
                </a>
                <a href={div_ref} className="secondary-content">
                    <i className="material-icons">edit</i>
                </a>
                <div id={name_div} className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4 className='center'>Modificar {title}</h4>
                        {resultado}
                    </div>
                    <div className="modal-footer">
                        <Button data={Modificar} />
                        <Button data={Regresar} />
                    </div>
                </div>
            </div>
        );
    }
}

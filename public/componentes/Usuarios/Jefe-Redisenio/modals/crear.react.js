import React from 'react';

import Button from './buttons/button.react';
// import Input from './inputs/input.react';

export default class Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const name_div = data[0];
        const div_ref = data[1];
        const title = data[2];
        const Guardar = ['Guardar', 'btn btn-flat waves-effect waves-light green darken-4 white-text', 'save'];
        const Regresar = ['Regresar', 'modal-action modal-close waves-effect waves-green btn-flat', 'reply'];
        return (
            <div id={name_div} className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4 className='center'>Crear {title}</h4>
                    <p>A bunch of text</p>
                    {/*aqui los inputs*/}
                </div>
                <div className="modal-footer">
                    <Button data={Guardar} />
                    <Button data={Regresar} />
                </div>
            </div>
        );
    }
}

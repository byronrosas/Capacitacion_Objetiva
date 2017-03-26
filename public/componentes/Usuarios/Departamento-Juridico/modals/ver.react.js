import React from 'react';

import Button from './buttons/button.react';
// import Input from './inputs/input.react';

export default class Ver extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const name_div = data[0];
        const div_ref = data[1];
        const title = data[2];
        const Ok = ['Ok', 'btn btn-flat waves-effect waves-light green darken-4 white-text', 'thumb_up'];
        const Regresar = ['Regresar', 'modal-action modal-close waves-effect waves-green btn-flat', 'reply'];
        return (
            <div>
                <a href={div_ref} className="secondary-content">
                    <i className="material-icons">visibility</i>
                </a>
                <div id={name_div} className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4 className='center'><b>Ver {title}</b></h4>
                        {/*este boton muestra un pdf en otra pestaña*/}
                        <br/>
                         <div className='center'>
                            <a className="btn-large waves-effect waves-light green darken-4">
                                <i className="material-icons left">insert_drive_file</i>
                                Ver Contrato
                            </a>
                        </div>
                        <br/>
                        <div className='center'>
                            <p> El siguiente botón le redirigirá a una página externa donde se podrá visualizar el contrato.</p>
                        </div>
                    </div>
                    <div className="modal-footer ">
                        <Button data={Ok} />
                        <Button data={Regresar} />
                    </div>
                </div>
            </div>
        );
    }
}

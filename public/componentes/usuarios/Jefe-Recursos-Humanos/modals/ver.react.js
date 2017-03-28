import React from 'react';

import Button from './buttons/button.react';

export default class Ver extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const name_div = data[0];
        const div_ref = data[1];
        const title = data[2];
        const Aprobar = ['Aprobar', 'btn btn-flat waves-effect waves-light green darken-4 white-text', 'thumb_up'];
        const No_Aprobar = ['No Aprobar', 'btn btn-flat waves-effect waves-light black white-text', 'thumb_down'];
        const Regresar = ['Regresar', 'modal-action modal-close waves-effect waves-green btn-flat', 'reply'];
        return (
            <div>
                <a href={div_ref} className="secondary-content">
                    <i className="material-icons">visibility</i>
                </a>
                <div id={name_div} className="modal modal-fixed-footer">
                    <div className="modal-content">
                        <h4 className='center'><b>Aprobar {title}</b></h4>
                        <br/>
                         <div className='center'>
                             {/*este boton muestra un pdf en otra pestaña*/}
                            <a className="btn-large waves-effect waves-light green darken-4">
                                <i className="material-icons left">insert_drive_file</i>
                                Ver Contrato
                            </a>
                        </div>
                        <br/>
                        <div className='center'>
                            <p> El siguiente botón le redirigirá a una página externa donde se podrá visualizar el contrato.</p>
                            <p> Una vez revisado dicho documento usted podrá decidir si aprueba o no el contrado.</p>
                        </div>
                    </div>
                    <div className="modal-footer ">
                        <Button data={Aprobar} />
                        <Button data={No_Aprobar} />
                        <Button data={Regresar} />
                    </div>
                </div>
            </div>
        );
    }
}

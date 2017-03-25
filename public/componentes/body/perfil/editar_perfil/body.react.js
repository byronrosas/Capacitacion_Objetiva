import React from 'react';

import Input_Edit from './input.edit.react';
import Upload_Img from './image.edit.react';
import Button_Edit from './button.edit.react';

export default class Perfil_Edit extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let Nombres = [ 'txtNombres_Edit', 'Nombres', 'text', 'username' ];
        let Apellidos = [ 'txtApellidos_Edit', 'Apellidos', 'text', 'nickname' ];
        let Cedula = [ 'txtCedula_Edit', 'Cédula', 'text', 'cedula' ];
        let Email = [ 'txtEmail_Edit', 'Correo Electrónico', 'email', 'email' ];
        let Telefono = [ 'txtTelefono_Edit', 'Teléfono', 'text', 'txtTelefono_Edit' ];
        let Direccion = [ 'txtDireccion_Edit', 'Dirección', 'text', 'txtDireccion_Edit' ];
        let Img = [ 'Imagen', 'img_Edit' ];
        let buttonSave = [ 'btn-Save-Edit-Profile', 'SaveChanges()', 'btn waves-effect waves-light green white-text', 'Guardar'];
        let buttonCancel = [ 'btn-Cancel-Edit-Profile', 'CancelChanges()', 'btn waves-effect waves-light red white-text', 'Cancelar'];

        return (
            <div>
                <form>
                    <div className="row">
                        <Input_Edit data={Nombres}/>
                        <Input_Edit data={Apellidos}/>
                    </div>
                    <div className="row">
                        <Input_Edit data={Cedula}/>
                        <Input_Edit data={Email}/>
                    </div>
                    <div className="row">
                        <Input_Edit data={Telefono}/>
                        <Input_Edit data={Direccion}/>
                    </div>
                    <Upload_Img picture={Img}/>
                    <br/>
                    <div className="card-action">
                        <Button_Edit button={buttonSave}/>
                        <Button_Edit button={buttonCancel}/>
                    </div>
                </form>
            </div>
        );
    }
}

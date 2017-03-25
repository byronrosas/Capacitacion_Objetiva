import React from 'react';
import $ from 'jquery';

import Input_Edit from './input.edit.react';
import Upload_Img from './image.edit.react';

export default class Perfil_Edit extends React.Component {
    constructor(props) {
        super(props);
    }
    SaveChanges() {
        // -------------Guarda cambios---------------
        Materialize.toast('Cambios guardados correctamente', 3000);
        // -------------Oculta el EditPerfil---------------
        OcultarEditPerfil();
    }
    CancelChanges() {
        // -------------Cancela los cambios---------------
        // -------------Oculta el EditPerfil---------------
        OcultarEditPerfil();
    }
    render() {
        let Nombres = [ 'txtNombres_Edit', 'Nombres', 'text', 'username' ];
        let Apellidos = [ 'txtApellidos_Edit', 'Apellidos', 'text', 'nickname' ];
        let Cedula = [ 'txtCedula_Edit', 'Cédula', 'text', 'cedula' ];
        let Email = [ 'txtEmail_Edit', 'Correo Electrónico', 'email', 'email' ];
        let Telefono = [ 'txtTelefono_Edit', 'Teléfono', 'text', 'txtTelefono_Edit' ];
        let Direccion = [ 'txtDireccion_Edit', 'Dirección', 'text', 'txtDireccion_Edit' ];
        let Img = [ 'Imagen', 'img_Edit' ];

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
                        <a id='btn-Save-Edit-Profile' onClick={this.SaveChanges} className='btn waves-effect waves-light green white-text'>Guardar</a>
                        <a id='btn-Cancel-Edit-Profile' onClick={this.CancelChanges} className='btn waves-effect waves-light red white-text'>Cancelar</a>
                    </div>
                </form>
            </div>
        );
    }
}

function OcultarEditPerfil() {
    $('#EditPerfil').addClass('animated fadeOut');
    $('#EditPerfil').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('#EditPerfil').addClass("hide");
        $('#ViewPerfil').removeClass('animated fadeOut');
        $('#ViewPerfil').show('fast');
    });
}
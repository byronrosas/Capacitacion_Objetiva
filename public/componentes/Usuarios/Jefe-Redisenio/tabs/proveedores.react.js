import React from 'react';

import Coleccion from '../coleccion/coleccion.proveedores.react';
import Crear from '../modals/crear.react';

export default class Proveedores extends React.Component {
    render() {
        // array de datos para crear curso
        const crear_proveedor_modal = ['crear_proveedor_JR','#crear_proveedor_JR','Proveedor'];
        const input_crear_proveedor = ['txt_Nombre_prov','txt_Pais_prov','txt_Ciudad_prov','txt_Direccion_prov','txt_Telefono_prov','txt_Observacion_prov','btn_guardar_prov_JR'];
        // array de datos para modificar curso
        const modificar_proveedor_modal = ['modificar_proveedor_JR','#modificar_proveedor_JR','Proveedor'];
        const input_modificar_proveedor = ['txt_Nombre_prov_edit','txt_Pais_prov_edit','txt_Ciudad_prov_edit','txt_Direccion_prov_edit','txt_Telefono_prov_edit','txt_Observacion_prov_edit','btn_modificar_prov_JR'];
        const tab = 2;
		
        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    {/*<ul></ul> crea la lista de elementos, cada elemento es un <li></li>*/}
                    <ul id="listar_proveedores_JR" className="collection with-header">
                        {/*en esta parte se debe hace la llamada a la DB para mostrar los datos*/}
                        <Coleccion modal={modificar_proveedor_modal} input={input_modificar_proveedor} tab={tab} />
                        <Coleccion modal={modificar_proveedor_modal} input={input_modificar_proveedor} tab={tab} />
                    </ul>
                </div>
                <div className="col s1 m1 l2"></div>
				<div className="fixed-action-btn">
					<a href={crear_proveedor_modal[1]} className="btn-floating btn-large waves-effect waves-light green darken-4">
                        <i className="material-icons">add</i>
                    </a>
				</div>
                <Crear modal={crear_proveedor_modal} input={input_crear_proveedor} tab={tab} />
            </div>
        );
    }
}
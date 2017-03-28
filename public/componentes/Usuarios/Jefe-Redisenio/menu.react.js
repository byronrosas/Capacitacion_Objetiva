import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Cursos from './tabs/cursos.react';
import Proveedores from './tabs/proveedores.react';

export default class Menu_Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 green darken-4">
                    <ul className="tabs green darken-4">
                        <li className="tab"><a href="#perfil">Perfil</a></li>
                        <li className="tab"><a href="#cursos">Cursos</a></li>
                        <li className="tab"><a href="#proveedores">Proveedores</a></li>
                    </ul>
                </div>
                <div id="perfil" className="col s12">
                    <Perfil />
                </div>
                <div id="cursos" className="col s12">
                    <Cursos />
                </div>
                <div id="proveedores" className="col s12">
                    <Proveedores />
                </div>
            </div>
        );
    }
}
// Accesos:
// R(18): Ver perfil de jefe de rediseño.  -----completado
// R(19): Ver lista de proveedores.  -----completado
// R(20): Crear proveedores.  -----completado
// R(21): Ver y crear nuevos cursos.  -----completado
// R(22): Crear destrezas para cada uno de los cursos. Estas son destrezas requeridas y destrezas adquiridas con el mismo.
// Restricciones:
// R(23):No puede modificar su número de cédula aunque este sea visible.
// R(24):Pasado el tiempo de crear proveedores y cursos. Estas ventanas solo serán de lectura
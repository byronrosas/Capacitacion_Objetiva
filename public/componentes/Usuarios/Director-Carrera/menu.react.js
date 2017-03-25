import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Cursos from './tabs/cursos.react';
import Proveedores from './tabs/proveedores.react';
import Detalle_Curso from './tabs/detalle.curso.proveedor.react';

export default class Menu_Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 green darken-4">
                    <ul className="tabs green darken-4">
                        <li className="tab col s3"><a href="#perfil">Perfil</a></li>
                        <li className="tab col s3"><a href="#detalle_curso">Detalle de Cursos</a></li>
                        <li className="tab col s3"><a href="#cursos">Cursos</a></li>
                        <li className="tab col s3"><a href="#proveedores">Proveedores</a></li>
                    </ul>
                </div>
                <div id="perfil" className="col s12">
                    <Perfil />
                </div>
                <div id="detalle_curso" className="col s12">
                    <Detalle_Curso />
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
// R(25): Perfil de director de carrera. -----Completo
// R(26): Ver lista de proveedores. -----Completo
// R(27): Ver lista de cursos. -----Completo
// R(28): Crear, modificar un detalle del curso, seleccionando un curso y su proveedor.  -------completo
// cancelar un detalle del curso, seleccionando un curso y su proveedor.
// R(29): Ver detalles de los cursos con sus proveedores.  ---completo
// Restricciones:
// R(30):No puede modificar su número de cédula aunque este sea visible.
// R(31): Solo podrá acceder a crear detalles si y solo si cursos y proveedores fueron publicados.
// R(32):Pasado el tiempo de crear detalle de cursos. Estas ventanas solo serán de lectura
import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Contratos from './tabs/contratos.react';
import Cursos from './tabs/detalle.curso.proveedor.react';
import Docentes from './tabs/docentes.react';

export default class Menu_Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 green darken-4">
                    <ul className="tabs green darken-4">
                        <li className="tab col s3"><a href="#perfil">Perfil</a></li>
                        <li className="tab col s3"><a href="#contratos">Contratos</a></li>
                        <li className="tab col s3"><a href="#detalle_curso">Aprobar Cursos</a></li>
                        <li className="tab col s3"><a href="#docente">Docentes</a></li>
                    </ul>
                </div>
                <div id="perfil" className="col s12">
                    <Perfil />
                </div>
                <div id="contratos" className="col s12">
                    <Contratos />
                </div>
                <div id="detalle_curso" className="col s12">
                    <Detalle_Curso />
                </div>
                <div id="docente" className="col s12">
                    <Docentes />
                </div>
            </div>
        );
    }
}

// Accesos:
// R(41): Perfil de director de RRHH. -----completo
// R(42): Ver lista y perfil de docentes.
// R(43): Ver lista de los cursos con su detalle. -----completo
// R(44): Ver lista de contratos (Docente - Curso) -----completo
// R(45): Aprobar contratos. -----completo
// Restricciones:
// R(46):No puede modificar su número de cédula aunque este sea visible.
// R(47): Solo podrá acceder a crear detalles si y solo si cursos y proveedores fueron publicados.
// R(48):Pasado el tiempo de aprobar contratos, estos serán solo de lectura.
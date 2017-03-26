import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Contratos from './tabs/contratos.react';
import Detalle_Curso from './tabs/detalle.curso.proveedor.react';

export default class Menu_Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 green darken-4">
                    <ul className="tabs green darken-4">
                        <li className="tab col s3 green darken-4"><a href="#perfil">Perfil</a></li>
                        <li className="tab col s3 green darken-4"><a href="#detalle_curso">Detalle de Cursos</a></li>
                        <li className="tab col s3 green darken-4"><a href="#contratos">Contratos</a></li>
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
            </div>
        );
    }
}
// Accesos:
// R(49): Perfil de usuarios del departamento jurídico.
// R(50): Ver lista de contratos.
// R(51): Ver lista documento del detalle-curso proveedor.
// Restricciones:
// R(52):No puede modificar su número de cédula aunque este sea visible.
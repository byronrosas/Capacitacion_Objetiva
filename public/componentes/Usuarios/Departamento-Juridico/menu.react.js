import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Contratos from './contratos.react';
import Detalle_Curso from './detalle.curso.proveedor.react';

export default class Menu_Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 green darken-4">
                    <ul className="tabs green darken-4">
                        <li className="tab col s3 green darken-4"><a href="#perfil">Perfil</a></li>
                        <li className="tab col s3 green darken-4"><a href="#contratos">Contratos</a></li>
                        <li className="tab col s3 green darken-4"><a href="#detallecurso">Detalle Curso</a></li>
                    </ul>
                </div>
                <div id="perfil" className="col s12">
                    <Perfil />
                </div>
                <div id="contratos" className="col s12">
                    <Contratos />
                </div>
                <div id="detallecurso" className="col s12">
                    <Detalle_Curso />
                </div>
            </div>
        );
    }
}
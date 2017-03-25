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
                        <li className="tab col s3"><a href="#perfil">Perfil</a></li>
                        <li className="tab col s3"><a href="#cursos">Cursos</a></li>
                        <li className="tab col s3"><a href="#proveedores">Proveedores</a></li>
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
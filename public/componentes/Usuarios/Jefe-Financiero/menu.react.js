import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Contratos from './tabs/contratos.react';
import Cursos from './tabs/cursos.react';
import Proveedores from './tabs/proveedores.react';

export default class Menu_Tabs extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 green darken-4">
                    <ul className="tabs green darken-4">
                        <li className="tab col s3"><a href="#perfil">Perfil</a></li>
                        <li className="tab col s3"><a href="#contratos">Contratos</a></li>
                        <li className="tab col s3"><a href="#detalle_curso">Aprobar Cursos</a></li>
                        <li className="tab col s3"><a href="#cursos">Cursos</a></li>
                        <li className="tab col s3"><a href="#proveedores">Proveedores</a></li>
                    </ul>
                </div>
                <div id="perfil" className="col s12">
                    <Perfil />
                </div>
                <div id="contratos" className="col s12">
                    <Contratos />
                </div>
                {/*<div id="detalle_curso" className="col s12">
                    <Detalle_Curso />
                </div>*/}
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

// R(34): Ver lista de proveedores.  -----completado
// R(35): Ver lista de cursos.  -----completado
// R(36): Ver y aprobar el detalle de curso, y subir un documento que valide dicha aprobación.  
// R(37): Ver y aprobar Contrato (Docente-Curso)  -----completado
// Restricciones:
// R(38): No puede modificar su número de cédula aunque este sea visible.  
// R(39): Solo podrá acceder a crear detalles si y solo si cursos y proveedores fueron publicados.  
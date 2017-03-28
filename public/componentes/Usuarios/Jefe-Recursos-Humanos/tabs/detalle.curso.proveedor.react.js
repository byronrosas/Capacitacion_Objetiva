import React from 'react';

import Coleccion from '../coleccion/coleccion.detalle.curso.react';

export default class Detalle_Curso extends React.Component {
    render() {
        const tab = 2;

        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    {/*<ul></ul> crea la lista de elementos, cada elemento es un <li></li>*/}
                    <ul id="listar_cursos_DC" className="collection with-header">
                        {/*en esta parte se debe hace la llamada a la DB para mostrar los datos*/}
                        <Coleccion />
                        <Coleccion />
                    </ul>
                </div>
                <div className="col s1 m1 l2"></div>
            </div>
        );
    }
}
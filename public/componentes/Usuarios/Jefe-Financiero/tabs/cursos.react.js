import React from 'react';

import Coleccion from '../coleccion/coleccion.react.js';

export default class Cursos extends React.Component {
    render() {
        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    {/*<ul></ul> crea la lista de elementos, cada elemento es un <li></li>*/}
                    <ul id="listar_cursos_JF" className="collection with-header">
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
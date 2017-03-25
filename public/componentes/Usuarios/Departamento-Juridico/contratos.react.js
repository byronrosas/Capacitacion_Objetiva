import React from 'react';

import Coleccion from './coleccion.react.js';

export default class Contratos extends React.Component {
    render() {
        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    <ul id="listar_contratos" className="collection with-header">
                        <Coleccion />
                        <Coleccion />
                    </ul>
                </div>
                <div className="col s1 m1 l2"></div>
                {/*mantener <div></div> si se necesita crear un registro*/}
                <div className="boton-crear">
                    <a className="fixed-button btn-floating btn-large waves-effect waves-light green darken-4"><i className="material-icons">add</i></a>
                    {/*<a className="modal-trigger waves-effect waves-light btn black-text white" href="#CrearFecha">
                        CREAR
                    </a>*/}
                </div>
            </div>
        );
    }
}
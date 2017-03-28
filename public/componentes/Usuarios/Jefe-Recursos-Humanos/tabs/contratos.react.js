import React from 'react';

import Coleccion from '../coleccion/coleccion.contrato.react';

export default class Contratos extends React.Component {
    render() {
        let ver_contrato_modal = ['ver_contrato_JF', '#ver_contrato_JF','Contrato'];
        const tab = 1;

        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    {/*<ul></ul> crea la lista de elementos, cada elemento es un <li></li>*/}
                    <ul id="listar_contratos_JF" className="collection with-header">
                        {/*en esta parte se debe hace la llamada a la DB para mostrar los datos*/}
                        <Coleccion data={ver_contrato_modal} />
                        <Coleccion data={ver_contrato_modal} />
                    </ul>
                </div>
                <div className="col s1 m1 l2"></div>
            </div>
        );
    }
}
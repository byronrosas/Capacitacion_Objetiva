import React from 'react';

import Coleccion from '../coleccion/coleccion.detalle.curso.react';
import Crear from '../modals/crear.react';

export default class Detalle_Curso extends React.Component {
    render() {
        let crear_detalle_curso_modal = ['crear_detalle_curso_DC', '#crear_detalle_curso_DC','Detalle Curso'];
        let modificar_detalle_curso_modal = ['modificar_detalle_curso_DC', '#modificar_detalle_curso_DC','Detalle Curso'];
        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    {/*<ul></ul> crea la lista de elementos, cada elemento es un <li></li>*/}
                    <ul id="listar_cursos_DC" className="collection with-header">
                        {/*en esta parte se debe hace la llamada a la DB para mostrar los datos*/}
                        <Coleccion data={modificar_detalle_curso_modal} />
                        <Coleccion data={modificar_detalle_curso_modal} />
                    </ul>
                </div>
                <div className="col s1 m1 l2"></div>
                <div className="boton-crear">
                    <a href={crear_detalle_curso_modal[1]} className="fixed-button btn-floating btn-large waves-effect waves-light green darken-4">
                        <i className="material-icons">add</i>
                    </a>
                </div>
                <Crear data={crear_detalle_curso_modal}/>
            </div>
        );
    }
}
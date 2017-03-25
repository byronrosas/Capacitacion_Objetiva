import React from 'react';

export default class Detalle_Curso extends React.Component {
    render() {
        return (
            <div className="row coleccion">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    <ul id="listar_contratos" className="collection with-header">
                        {/*aqui van los datos del pop-up CrearFecha*/}
                        <li className="collection-item">
                            <div>
                                <span className="title">Title</span>
                                <a href="#!" className="secondary-content">
                                    <i className="material-icons">edit</i>
                                </a>
                            </div>
                            <p>First Line <br/>
                                Second Line
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="col s1 m1 l2"></div>
                <div className="boton-crear">
                    <a className="fixed-button btn-floating btn-large waves-effect waves-light green darken-4"><i className="material-icons">add</i></a>
                    {/*<div className="boton-crear green darken-4 center"><a className="modal-trigger waves-effect waves-light btn black-text white" href="#CrearFecha">CREAR</a></div>*/}{/*<a className="modal-trigger waves-effect waves-light btn black-text white" href="#CrearFecha">
                        CREAR
                    </a>*/}
                </div>
            </div>
        );
    }
}
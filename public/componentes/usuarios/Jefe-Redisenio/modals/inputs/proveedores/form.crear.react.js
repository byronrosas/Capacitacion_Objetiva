import React from 'react';

import Entrada from './input.react';
// import Stars from './star.react';

export default class Input_Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const nombre = [data[0], 'input-field col s12 m8 l8', 'Nombre del Proveedor', 'validate'];
        const pais = [data[1], 'input-field col s12 m6 l6', 'País', 'validate'];
        const ciudad = [data[2], 'input-field col s12 m6 l6', 'Ciudad', 'validate'];
        const direccion = [data[3], 'input-field col s12 m12 l12', 'Dirección', 'validate'];
        const telefono = [data[4], 'input-field col s12 m4 l4', 'Teléfono', 'validate'];
        const observacion = data[5];

        const one = ['star_one', 'star_two', 'star_three', 'star_four', 'star_five'];

        return (
            <div className='row'>
                <div className='col m2 l2'></div>
                <div className='col s12 m8 l8'>
                    <form>
                        {/*<Stars data={one} />*/}
                        <noscript>Necesitas tener habilitado javascript para poder votar</noscript>
                        <br />
                        <div className='row'>
                            <Entrada data={nombre} />
                            <Entrada data={telefono} />
                        </div>
                        <div className='row'>
                            <Entrada data={pais} />
                            <Entrada data={ciudad} />
                        </div>
                        <div className='row'>
                            <Entrada data={direccion} />
                        </div>
                        <div className='row'>
                            <div className='input-field col s12 m12 l12'>
                                <textarea id={observacion} className="materialize-textarea"></textarea>
                                <label htmlFor={observacion}>Observaciones</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col m2 l2'></div>
            </div>
        );
    }
}
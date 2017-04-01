import React from 'react';

import Entrada from './input.react';

export default class Input_Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let data = this.props.data;
        // id ------  div_class ------ name_label ------ input_class ------ maxLength
        const nombre = [data[0], 'input-field col s12 m12 l12', 'Nombre del Curso', 'validate', '30'];
        const area = [data[1], 'input-field col s12 m12 l12', 'Área', 'validate', '30'];
        const destreza = [data[2], 'input-field col s12 m12 l12', 'Destrezas', 'validate', '50'];
        const observacion = data[3];

        return (
            <div className='row'>
                <div className='col m2 l2'></div>
                <div className='col s12 m8 l8'>
                    <form>
                        <div className='row'>
                            <Entrada data={nombre}  />
                            <Entrada data={area} />
                            <Entrada data={destreza} />
                            <div className='input-field col s12 m12 l12'>
                                <textarea id={observacion} className="materialize-textarea" maxLength='255'></textarea>
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
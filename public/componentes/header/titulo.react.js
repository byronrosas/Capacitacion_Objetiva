import React from 'react';

export default class Titulo_Inicio extends React.Component {
    componentWillUnmount () {
		console.log( 'Componente Desmontado');
	}
    render () {
        return (
            <a id='titulo' href='/'><h4 className='titulo green darken-4 center'>CAPACITACIÓN OBJETIVA</h4></a>
        );
    }
}
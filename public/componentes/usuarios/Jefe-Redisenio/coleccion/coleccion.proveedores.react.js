import React from 'react';

import Modificar from '../modals/modificar.react';

export default class Coleccion extends React.Component {
	constructor(props) {
		super(props);
	}
	// aqui se puede hace ajax
	render() {
		let modal = this.props.modal;
		let input = this.props.input;
		let tab = this.props.tab;
		var style = { paddingTop: 30 };
		var icon = { color: 'green'};
		var card = { boxShadow: 'none' };
		var card_content = { padding: 0};

		return (
			<li className="collection-item">
				<div className='card' style={card}>
					<div className='card-content row' style={card_content}>
						<div className='col s10 m11 l11'>
							<h5><strong>Universidad de las Fuerzas Armadas ESPE</strong></h5>
							<div className='row'>
								<div className='collection-text center col s12 m4 l4'>ciudad - pais</div>
								<div className='collection-text center col s12 m4 l4'>telefono</div>
								<div className='collection-text center col s12 m4 l4'>calificacion</div>
								<div className='collection-text col s12 m12 l12'>direccion</div>
							</div>
						</div>
						<div className='right-align col s2 m1 l1' style={style}>
							<a href={modal[1]}><i className="material-icons" style={icon}>edit</i></a>
							<a href='#' className='activator '><i className="material-icons" style={icon}>delete</i></a>
						</div>
					</div>
					<div className="card-reveal">
						<span className="card-title">
							¿Desea eliminar el {modal[modal.length - 1]}: Universidad de las Fuerzas Armadas ESPE?
							<i className="material-icons right">close</i>
						</span>
						<br />
						<a href="#" className='btn waves-effect waves-light grey darken-3'>Eliminar</a>
					</div>
				</div>
				<Modificar modal={modal} input={input} tab={tab} /> 
			</li>
		);
	}
}
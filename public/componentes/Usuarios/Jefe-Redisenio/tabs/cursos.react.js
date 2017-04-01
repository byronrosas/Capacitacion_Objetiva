import React from 'react';

import Coleccion from '../coleccion/coleccion.react.js';
import Crear from '../modals/crear.react';

export default class Cursos extends React.Component {
	render() {
		const crear_curso_modal = ['crear_curso_JR', '#crear_curso_JR','Curso'];
		//  inputs id ----- btn id
		const input_crear_curso = ['txt_Nombre_cur', 'txt_Area_cur', 'txt_Destreza_cur', 'txt_Observacion_cur','btn_guardar_cur_JR'];
		const modificar_curso_modal = ['modificar_curso_JR', '#modificar_curso_JR','Curso'];
		const input_modificar_curso = ['txt_Nombre_cur_edit', 'txt_Area_cur_edit', 'txt_Destreza_cur_edit', 'txt_Observacion_cur_edit', ,'btn_modificar_cur_JR'];
		const tab = 1;

		return (
			<div className="row coleccion">
				<div className="col s1 m2 l2"></div>
				<div className="col s10 m8 l8">
					{/*<ul></ul> crea la lista de elementos, cada elemento es un <li></li>*/}
					<ul id="listar_cursos_JR" className="collection with-header">
						{/*en esta parte se debe hace la llamada a la DB para mostrar los datos*/}
						<Coleccion modal={modificar_curso_modal} input={input_modificar_curso} tab={tab} />
						<Coleccion modal={modificar_curso_modal} input={input_modificar_curso} tab={tab} />
					</ul>
				</div>
				<div className="col s1 m1 l2"></div>
				<div className="fixed-action-btn">
					<a href={crear_curso_modal[1]} className="btn-floating btn-large waves-effect waves-light green darken-4">
						<i className="material-icons">add</i>
					</a>
				</div>
				<Crear modal={crear_curso_modal} input={input_crear_curso} tab={tab}/>
			</div>
		);
	}
}
import React from 'react';

import Perfil from '../../body/perfil/body.react';
import Curso_Actual from './tabs/curso.actual.react';
// import Cursos from './tabs/cursos.react';
// import Registro_Actividades from './tabs/registro.actividades.react';

export default class Menu_Tabs extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col s12 green darken-4">
					<ul className="tabs green darken-4">
						<li className="tab"><a href="#perfil">Perfil</a></li>
						<li className="tab"><a href="#curso_actual">Curso Actual</a></li>
						<li className="tab"><a href="#cursos">Cursos</a></li>
						<li className="tab"><a href="#registro_actividades">Registro de Actividades</a></li>
					</ul>
				</div>
				<div id="perfil" className="col s12">
					<Perfil />
				</div>
				<div id="curso_actual" className="col s12">
					<Curso_Actual />
				</div>
				{/*<div id="cursos" className="col s12">
					<Cursos />
				</div>
				<div id="registro_actividades" className="col s12">
					<Registro_Actividades />
				</div>*/}
			</div>
		);
	}
}
// Accesos:
// R(11): Perfil del docente
// R(12): Crear, modificar los campos visibles de su perfil, incluyendo la clave.
// R(13): Ver y seleccionar el detalle de los curso, si y solo si el estado del curso es aprobado y publicado por el jefe de recursos humanos.
// R(14): Al momento de seleccionar y guardar su configuración el docente no podrá seleccionar ningún otro curso. Puede hacerlo si elimina la selección actual.
// R(15): Después del proceso de selección de cursos (después de la fecha establecida). 
// R(15.1): Si el estado del contrato(CursoDocente) es:
// 	En acción: No hay acciones.
// 	Devengar: El docente será informado y tendrá
// 	que subir un documento de aprobación del curso.
// 	Liberación: El docente será informado del
// 	respectivo proceso.
// Restricciones:
// R(16):No puede modificar su número de cédula aunque este sea visible.
// R(17):,Podrá seleccionar el curso y realizar el proceso si y solo si los detalles de cursos fueron publicados. Pasado el tiempo de inscripciones de cursos, el sistema no permitirá la selección de cursos
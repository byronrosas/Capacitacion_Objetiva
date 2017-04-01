$(document).ready(() => {
	// ajax request para crear curso
	$("#btn_guardar_cur_JR").click(() => {
		$.post("/curso/crear",
			{
				nombre_cur: $('#txt_Nombre_cur').val(),
				area_cur: $('#txt_Area_cur').val(),
				destrezas_cur: $('#txt_Destreza_cur').val(),
				observacion_cur: $('#txt_Observacion_cur').val()
			},
			(data,status,xhr) => {
				switch (status) {
					case 'success':
						console.log('Guardado '+ status);
						break;
					case 'notmodified':
						console.log('No Guardado '+ status);
						break;
					case 'error':
						console.log('Error al Guardar '+ status);
						break;
					case 'timeout':
						console.log('Tiempo Agotado '+ status);
						break;
					case 'parsererror':
						console.log('Error de Analizador'+ status);
						break;
					default:
						break;
				}
			}, 'json'
		);
	});
});
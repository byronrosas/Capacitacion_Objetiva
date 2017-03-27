$(function(){
    // reiniciar los labels materialize
    Materialize.updateTextFields();
    // inicializacion de TABS
    $('ul.tabs').tabs();
  // Fin de tabs
  // inicializacion de MODALS
    $('.modal').modal();
  // Fin de modals
        var window_width = $(window).width();
        $(window).load(function() {
            setTimeout(function() {
                $('body').addClass('loaded');
            }, 200);
        });
        $('.slider').slider({
            full_width: true
        });
    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    if (is_touch_device()) {
        $('body').css({
            overflow: 'auto'
        })
    }
    // validaciones
    function soloLetras(evt) {
        key = evt.keyCode || evt.which;
        tecla = String.fromCharCode(key).toLowerCase();
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
        especiales = "8-37-39-46";
        tecla_especial = false
        for(var i in especiales) {
            if(key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
        if(letras.indexOf(tecla) == -1 && !tecla_especial) {
            return false;
        }
    }

    function soloNumeros(evt) {
        evt = (evt) ? evt : window.event
        var charCode = (evt.which) ? evt.which : evt.keyCode
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            status = "This field accepts numbers only."
            return  false;
        }
        status = ""
        return true
    }
    
    function ValidarCedula(form) {
        var cedula = form.cedula.value;
        array = cedula.split( "" );
        num = array.length;
        if ( num == 10 ) {
            total = 0;
            digito = (array[9]*1);
            for( i=0; i < (num-1); i++ ) {
                mult = 0;
                if ( ( i%2 ) != 0 ) total = total + ( array[i] * 1 );
                else {
                    mult = array[i] * 2;
                    if ( mult > 9 ) total = total + ( mult - 9 );
                    else total = total + mult;
                }
            }
            decena = total / 10;
            decena = Math.floor( decena );
            decena = ( decena + 1 ) * 10;
            final = ( decena - total );
            if ( ( final == 10 && digito == 0 ) || ( final == digito ) ) {
                alert( "La c\xe9dula ES v\xe1lida!!!" );
                return true;
            } else {
                alert( "La c\xe9dula NO es v\xe1lida!!!" );
                return false;
            }
        } else {
            alert("La c\xe9dula no puede tener menos de 10 d\xedgitos");
            return false;
        }
    }
    // validar crear Curso
    // $("#txt_Nombre_cur").keypress(() => { return soloLetras(event); });
    // $("#txt_Area_cur").keypress(() => { return soloLetras(event); });
    // $("#txt_Destreza_cur").keypress(() => { return soloLetras(event); });
    // // validar modificar Curso
    // $("#txt_Nombre_cur_edit").keypress(() => { return soloLetras(event); });
    // $("#txt_Area_cur_edit").keypress(() => { return soloLetras(event); });
    // $("#txt_Destreza_cur_edit").keypress(() => { return soloLetras(event); });
    // // validar crear Proveedor
    // $("#txt_Nombre_prov").keypress(() => { return soloLetras(event); });
    // $("#txt_Ciudad_prov").keypress(() => { return soloLetras(event); });
    // $("#txt_Pais_prov").keypress(() => { return soloLetras(event); });
    // $("#txt_Direccion_prov").keypress(() => { return soloLetras(event); });
    // $("#txt_Telefono_prov").keypress(() => { return soloNumeros(event); });
    // // validar modificar Proveedor
    // $("#txt_Nombre_prov_edit").keypress(() => { return soloLetras(event); });
    // $("#txt_Pais_prov_edit").keypress(() => { return soloLetras(event); });
    // $("#txt_Ciudad_prov_edit").keypress(() => { return soloLetras(event); });
    // $("#txt_Direccion_prov_edit").keypress(() => { return soloLetras(event); });
    // $("#txt_Telefono_prov_edit").keypress(() => { return soloNumeros(event); });
});
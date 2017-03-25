import React from 'react';

export default class Texto_Presentacion extends React.Component {
    render() {
        return (
            <div>
                <p className='parrafo padding-10'>
                    <font size='+1'>
                        El Sistema “Capacitación Objetiva”, es un producto software desarrollado para funcionar en entornos WEB, lo que permite una rápida integración con los dispositivos y herramientas que están en internet.
                        <br/>
                        <br/>
                        Para el desarrollo de la presente aplicación se utilizó el patrón de arquitectura MVC (Modelo Vista Controlador) que es un patrón que define la organización independiente del Modelo (Objetos de Negocio), la Vista (interfaz con el usuario u otro sistema) y el Controlador (controlador del workflow de la aplicación).
                        <br/>
                        <br/>
                        De esta forma, dividimos el sistema en tres capas donde, tenemos la encapsulación de los datos, la interfaz o vista por otro y por último la lógica interna o controlador.
                        <br/>
                        <br/>
                        Con lo cual se buscamos crear software más robusto con un ciclo de vida más adecuado, donde se potencie la facilidad de mantenimiento, reutilización del código y la separación de conceptos.
                        <br/>
                    </font>
                </p>
            </div>
        );
    }
}
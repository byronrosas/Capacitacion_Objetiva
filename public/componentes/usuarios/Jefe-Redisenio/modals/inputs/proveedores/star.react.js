import React from 'react';

import Entrada from './input.react';

export default class Input_Crear extends React.Component {
    constructor(props) {
        super(props);
    }
    MuyAlto() { console.log(`Muy alto`); }
    MedioAlto(al) { console.log(`Medio alto`); }
    Medio() { console.log(`Medio`); }
    MedioBajo() { console.log(`Medio bajo`); }
    Bajo() { console.log(`Bajo`); }
    render() {
        let data = this.props.data;
        const id_1 = data[0];
        const id_2 = data[1];
        const id_3 = data[2];
        const id_4 = data[3];
        const id_5 = data[4];

        return (
            <div className="rating center">
                <input type="radio" id={id_5} name="rating" value="5" /><label htmlFor={id_5} title="Muy Alto">
                    <i className="material-icons">stars</i></label>
                <input type="radio" id={id_4} name="rating" value="4" /><label htmlFor={id_4} title="Medio Alto">
                    <i className="material-icons">stars</i></label>
                <input type="radio" id={id_3} name="rating" value="3" /><label htmlFor={id_3} title="Medio">
                    <i className="material-icons">stars</i></label>
                <input type="radio" id={id_2} name="rating" value="2" /><label htmlFor={id_2} title="Medio Bajo">
                    <i className="material-icons">stars</i></label>
                <input type="radio" id={id_1} name="rating" value="1" /><label htmlFor={id_1} title="Bajo">
                    <i className="material-icons">stars</i></label>
            {/*<fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="Rocks!">5 stars</label>
                <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="Pretty good">4 stars</label>
                <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="Meh">3 stars</label>
                <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="Kinda bad">2 stars</label>
                <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="Sucks big time">1 star</label>
            </fieldset>*/}
            </div>
        );
    }
}
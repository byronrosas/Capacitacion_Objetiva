import React from 'react';

export default class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const id_input = data[0];
        const div_class = data[1];
        const name_label = data[2];
        const input_class = data[3];

        return (
            <div className={div_class}>
                <input id={id_input} type="text" className={input_class} />
                <label htmlFor={id_input} data-success="Correcto">{name_label}</label>
            </div>
        );
    }
}
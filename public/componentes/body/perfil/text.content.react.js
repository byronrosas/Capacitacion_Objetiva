import React from 'react';

export default class Texto extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        let data = this.props.data;
        const titulo = data[0]; 
        const subtitulo = data[1];

        return (
            <div>
                <div className="col s12 m12 l6 center-align">
                    <h4 className="card-title responsive-text">
                        {titulo}
                    </h4>
                    <p className="medium-small grey-text">
                        {subtitulo}
                    </p>
                </div>
            </div>
        );
    }
}
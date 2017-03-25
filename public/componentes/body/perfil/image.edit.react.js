import React from 'react';

export default class Upload_Img extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let picture = this.props.picture;
        const span_title = picture[0];
        const input_Nombre = picture[1];
        return (
            <div className="row">
                <div className="col l2"></div>
                <div className="col s12 m12 l8 center-align">
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>
                                {span_title}
                            </span>
                            <input type="file"/>
                        </div>
                        <div className="file-path-wrapper">
                            <input id={input_Nombre} type="text" name={input_Nombre} className="file-path validate"/>
                        </div>
                    </div>
                </div>
                <div className="col l2"></div>
            </div>
        );
    }
}
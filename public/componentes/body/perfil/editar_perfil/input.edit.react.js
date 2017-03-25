import React from 'react';

export default class Input_Edit extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let data = this.props.data;
        const txt_value = data[0];
        const txt_title = data[1];
        const txt_type = data[2];
        const txt_name = data[3];
        return (
            <div className="col s12 m12 l6">
                <label htmlFor={txt_value}>
                    {txt_title}
                </label>
                <input id={txt_value} type={txt_type} name={txt_name} className="validate"/>
            </div>
        );
    }
}
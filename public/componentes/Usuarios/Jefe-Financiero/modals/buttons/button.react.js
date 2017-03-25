import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const title = data[0];
        const class_button = data[1];
        const name_icon = data[2];
        return (
            <a href="#!" className={class_button}>
                <i className="material-icons left">{name_icon}</i>
                <span>{title}</span>
            </a>
        );
    }
}
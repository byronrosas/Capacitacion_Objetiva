import React from 'react';

export default class Button_Edit extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let button = this.props.button;
        const btn_Id= button[0];
        const btn_Evt= button[1];
        const btn_Class= button[2];
        const btn_Title= button[3];

        return (
            <a id={btn_Id} onClick={btn_Evt} className={btn_Class}>{btn_Title}</a>
        );
    }
}
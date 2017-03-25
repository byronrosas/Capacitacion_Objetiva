import React from 'react';

export default class Texto_Reveal extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        let text = this.props.text;
        const classSpan = text[0]; 
        const nameSpan = text[1];
        const classI = text[2];
        const nameI = text[3];
        
        return (
            <span className={classSpan}> {nameSpan}
                <i className={classI}>
                    {nameI}
                </i>
            </span>
        );
    }
}
// si algo fallta meter el span entre un div
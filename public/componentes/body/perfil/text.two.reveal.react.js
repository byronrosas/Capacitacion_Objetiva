import React from 'react';

export default class Texto_Reveal_Two extends React.Component {
    constructor (props) {
        super(props)
    }
    render() {
        let txt = this.props.txt;
        const classP = txt[0]; 
        const nameP = txt[1];
        const classI = txt[2];
        const nameI = txt[3];
        
        return (
            <p className={classP}> {nameP}
                <i className={classI}>{nameI}</i>
            </p>
        );
    }
}
// si algo fallta meter el span entre un div
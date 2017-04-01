import React from 'react';

import Modificar from '../modals/modificar.react';

export default class Coleccion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let modal = this.props.modal;
        let input = this.props.input;
        let tab = this.props.tab;
        return (
            <li className="green-hover collection-item">
                <div>
                    <span className="title">Title</span>
                    <Modificar modal={modal} input={input} tab={tab} />
                </div>
                <p>First Line <br/>
                    Second Line
                </p>
            </li>
        );
    }
}
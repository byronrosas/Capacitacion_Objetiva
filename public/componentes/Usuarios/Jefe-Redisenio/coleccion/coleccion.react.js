import React from 'react';

import Modificar from '../modals/modificar.react';

export default class Coleccion extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        return (
            <li className="green-hover collection-item">
                <div>
                    <span className="title">Title</span>
                    <Modificar data={data}/>
                </div>
                <p>First Line <br/>
                    Second Line
                </p>
            </li>
        );
    }
}
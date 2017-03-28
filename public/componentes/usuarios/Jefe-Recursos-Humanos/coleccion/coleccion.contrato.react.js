import React from 'react';

import Ver from '../modals/ver.react';

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
                    <Ver data={data}/>
                </div>
                <p>First Line <br/>
                    Second Line
                </p>
            </li>
        );
    }
}
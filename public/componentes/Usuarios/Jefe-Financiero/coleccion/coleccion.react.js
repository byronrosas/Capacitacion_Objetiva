import React from 'react';

export default class Coleccion extends React.Component {
    render() {
        return (
            <li className="green-hover collection-item">
                <span className="title">Title</span>
                <p>First Line <br/>
                    Second Line
                </p>
            </li>
        );
    }
}
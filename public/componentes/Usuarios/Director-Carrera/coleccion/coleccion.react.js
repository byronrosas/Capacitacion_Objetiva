import React from 'react';

export default class Coleccion extends React.Component {
    render() {
        return (
            <li className="green-hover collection-item">
                <div>
                    <span className="title">Title</span>
                </div>
                <p>First Line <br/>
                    Second Line
                </p>
            </li>
        );
    }
}
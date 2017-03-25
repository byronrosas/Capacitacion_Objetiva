import React from 'react';

export default class Coleccion extends React.Component {
    render() {
        return (
            <li className="green-hover collection-item">
                <div>
                    <span className="title">Title</span>
                    {/*mantener <a></a> si se necesita editar el registro*/}
                    <a href="#!" className="secondary-content">
                        <i className="material-icons">edit</i>
                    </a>
                </div>
                <p>First Line <br/>
                    Second Line
                </p>
            </li>
        );
    }
}
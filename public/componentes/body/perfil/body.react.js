import React from 'react';

import Card_Image from './card.img.react';
import Card_Content from './card.content.react';
import Card_Reveal from './card.reveal.react';

export default class Body extends React.Component {
    render () {
        return (
            <div className="perfil row">
                <div className="col s1 m2 l2"></div>
                <div className="col s10 m8 l8">
                    <div className="card">
                        <Card_Image />
                        <Card_Content />
                        <Card_Reveal />
                    </div>
                </div>
                <div className="col s1 m2 l2"></div>
            </div>
        );
    }
}
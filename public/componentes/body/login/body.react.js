import React from 'react';

import Login_Form from './login.form.react';

export default class Body extends React.Component {
    render () {
        return (
            <div id="login-page" className="row green darken-4">
                <div className="col s2 m4 l4"></div>
                <div className="col s8 m4 l4 z-depth-4 card-panel">
                    <Login_Form />
                </div>
                <div className="col s2 m4 l4"></div>
            </div>
        );
    }
}
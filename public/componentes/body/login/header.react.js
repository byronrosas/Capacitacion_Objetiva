import React from 'react';

export default class Header extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col s12 center">
                    <img src="/images/login-espe.png" alt="Capacitacion Objetiva" className="responsive-img" width='130'/>
                    <p className="center login-form-text">Sign In</p>
                </div>
            </div>
        );
    }
}
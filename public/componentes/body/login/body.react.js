import React from 'react';
import $ from 'jquery';

import Login_Form from './login.form.react';

export default class Body extends React.Component {
    AnimacionLogin() {
        $('#login-page').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#div-login').addClass('animated bounceIn');
            $('#div-login').removeClass('hide');
        });
    }
    render () {
        return (
            <div id="login-page" className="row green darken-4 animated fadeIn" onLoad={this.AnimacionLogin}>
                <div className="col s2 m4 l4"></div>
                <div id="div-login" className="col s8 m4 l4 z-depth-4 card-panel hide">
                    <Login_Form />
                </div>
                <div className="col s2 m4 l4"></div>
            </div>
        );
    }
}
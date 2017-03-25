import React from 'react';
import $ from "jquery";

export default class Card_Image extends React.Component {
    constructor() {
        super();
    }
    onClick() {
        $('#EditPerfil').removeClass("hide");
        $('#EditPerfil').show('fast');
        $('#ViewPerfil').addClass('animated fadeOut');
        $('#ViewPerfil').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('#EditPerfil').removeClass('animated fadeOut hide');
            $('#ViewPerfil').hide('fast');
        });
    }
    render() {
        const Url_icono = 'images/icono-usuario.png';
        const Url_background_profile = 'images/user-profile-bg.jpg';
        return (
            <div className="card-image"> 
                <img src={Url_background_profile} className="activator"/>
                <img id="imgProfile" src={Url_icono} className="circle z-depth-2 responsive-img activator"/>
                <a className='btn-large btn-floating halfway-fab waves-effect waves-light darken-2 left activator'>
                    <i className="material-icons">
                        account_circle
                    </i>
                </a>
                <a className='btn-large btn-floating halfway-fab waves-effect waves-light darken-2' onClick={this.onClick}>
                    <i className="material-icons">
                        edit
                    </i>
                </a>
            </div>
        );
    }
}
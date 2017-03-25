import React from 'react';

export default class Card_Image extends React.Component {
    constructor(props) {
        super(props);
        // this._handleClick = this._handleClick.bind(this);
    }
    // componentDidMount() {
    //     this._handleClick();
    // }
    // _handleClick() {
    //     $('#EditPerfil').removeClass("hide");
    //     $('#EditPerfil').show('fast');
    // }
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
                <a className='btn-large btn-floating halfway-fab waves-effect waves-light darken-2'> {/*onClick={this._handleClick}>*/}
                    <i className="material-icons">
                        edit
                    </i>
                </a>
            </div>
        );
    }
}
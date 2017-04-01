import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let user = this.props.user;
        console.log(user);
        let cabecera = 'left'
        let resultado = null;
        
        if(user != undefined) {
            resultado =
                <nav className='nav nav-extended'>
                    <div className='nav-wrapper green darken-4 center'>
                        <img src='/images/logo-espe.png' width='180' alt='Logotipo' className='img-fixed left'/>
                        <ul id='nav-mobile' className='right'>
                            <li><a href='#' className='height-small-fixed'>
                                <span className='hide-on-small-only'>FAQs</span>
                                <i className='left material-icons'>help</i>
                            </a></li>
                            <li><a href='#' className='height-small-fixed'>
                                <span className='hide-on-small-only'>Salir</span>
                                <i className='left material-icons'>input</i>
                            </a></li>
                        </ul>
                        <h5 className='user-title right hide-on-med-and-down animated flash infinite'>{user} &#160;</h5>
                    </div>
                </nav>;
        } else if(user == undefined) {
            resultado =
                <nav className='nav nav-extended'>
                    <div className='nav-wrapper green darken-4 center'>
                        <img src='/images/logo-espe.png' width='180' alt='Logotipo' className='img-fixed'/>
                    </div>
                </nav>;
        }
        
        return ( <div>{resultado}</div>);
    }
}
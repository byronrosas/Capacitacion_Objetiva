import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let user = this.props.user;
        let cabecera = 'left';
        let resultado = null;
        
        if(user != undefined) {
            resultado =
                <nav className='nav nav-extended'>
                    <div className='nav-wrapper green darken-4 center'>
                        <a className='cabecera left' href='#'>
                            <img src='/images/logo-espe.png' width='180' alt='Logotipo' className='img-fixed'/>
                        </a>
                        <ul id='nav-mobile' className='right'>
                            <li><a href='#'>FAQs</a></li>
                            <li><a href='#'>Salir</a></li>
                        </ul>
                        <h5 className='right hide-on-med-and-down'>{user}</h5>
                    </div>
                </nav>;
        } else if(user == undefined) {
            resultado =
                <nav className='nav nav-extended'>
                    <div className='nav-wrapper green darken-4 center'>
                        <a className='cabecera' href='#'>
                            <img src='/images/logo-espe.png' width='180' alt='Logotipo' className='img-fixed'/>
                        </a>
                    </div>
                </nav>;
        }

        return (
            <div>
                {resultado}
            </div>
        );
    }
}
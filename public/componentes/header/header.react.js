import React from 'react';

export default class Header extends React.Component {
    render () {
        return (
            <div className='nav nav-extended'>
                <div className='nav-wrapper green darken-4 center'>
                    <div className='cabecera' href='#'>
                        <img src='/images/logo-espe.png' width='180' alt='Logotipo'/>
                    </div>
                </div>
            </div>
        );
    }
}
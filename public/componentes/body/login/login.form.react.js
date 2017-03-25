import React from 'react';

import Header from './header.react';
import Input from './input.react';
import Button_Login from './button.login.react';

export default class Login_Form extends React.Component {
    render () {
        return (
            <form className="login-form" >
                {/*method="post" action="/login">*/}
                <Header />
                <Input />
                <Button_Login />
            </form>
        );
    }
}
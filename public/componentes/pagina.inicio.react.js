import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header  from './header/header.react';
import Titulo_Inicio from './header/titulo.react';
// import Usuario_Redisenio from './Usuarios/Jefe-Redisenio/menu.react';
import Usuario_Financiero from './Usuarios/Jefe-Financiero/menu.react';
// import Body_Presentacion from './body/presentacion/body.react';
// import Body_Login from './body/login/body.react';
// import Body_Perfil from './body/perfil/body.react';
import Footer from './footer/footer.react';

export default class Layout extends React.Component {
    render (){
        return (
            <div>
                <Header />
                <Titulo_Inicio/>
                {/*<Usuario_Redisenio />*/}
                <Usuario_Financiero />
                {/*<Router>
                    <div>
                        <Route exact path="/" component={Body_Presentacion}/>
                        <Route path="/login" component={Body_Login}/>
                        <Route path="/perfil" component={Body_Perfil}/>
                    </div>
                </Router>*/}
                <Footer />
            </div>
        );
    }
}
import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './header/header.react';
import Titulo_Inicio from './header/titulo.react';

// import Usuario_Jefe_Redisenio from './usuarios/Jefe-Redisenio/menu.react';
// import Usuario_Jefe_Financiero from './usuarios/Jefe-Financiero/menu.react';
import Usuario_Director_Carrera from './usuarios/Director-Carrera/menu.react';
// import Usuario_Dep_Juridico from './usuarios/Departamento-Juridico/menu.react';

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
                {/*<Usuario_Jefe_Redisenio />*/}
                {/*<Usuario_Jefe_Financiero />*/}
                <Usuario_Director_Carrera />
                {/*<Usuario_Dep_Juridico />*/}
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
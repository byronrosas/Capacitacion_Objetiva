import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header  from './header/header.react';
import Titulo_Inicio from './header/titulo.react';
import Menu_Tabs from './Usuarios/Departamento-Juridico/menu.react.js';
import Body_Presentacion from './body/presentacion/body.react';
import Body_Login from './body/login/body.react';
import Body_Perfil from './body/perfil/body.react';
import Footer from './footer/footer.react';

export default class Layout extends React.Component {
    render (){
        return (
            <div>
                <Header />
                <Titulo_Inicio/>
                <Menu_Tabs />
                <Router>
                    <div>
                        <Route exact path="/" component={Body_Presentacion}/>
                        <Route path="/login" component={Body_Login}/>
                        <Route path="/perfil" component={Body_Perfil}/>
                        {/*<Route path="/404" component={NotFound} status={404}/>*/}
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

/*const NotFound = () => (
    <div id="error-page">
        <div class="row">
            <div class="col s12">
                <div class="browser-window">
                    <div class="top-bar">
                        <div class="circles">
                            <div id="close-circle" class="circle"></div>
                            <div id="minimize-circle" class="circle"></div>
                            <div id="maximize-circle" class="circle"></div>
                        </div>
                    </div>
                    <div class="content">
                        <div class="row">
                            <div id="site-layout-example-top" class="col s12">
                                <p class="flat-text-logo center white-text caption-uppercase">Sorry but we couldn’t find this page :(</p>
                            </div>
                            <div id="site-layout-example-right" class="col s12 m12 l12">
                                <div class="row center">
                                    <h1 class="text-long-shadow col s12">404</h1>
                                </div>
                                <div class="row center">
                                    <p class="center white-text col s12">It seems that this page doesn’t exist.</p>
                                    <p class="center s12"><button onclick="goBack()" class="btn waves-effect waves-light">Back</button> <a href="http://demo.geekslabs.com/materialize/v2.1/layout03/index.html" class="btn waves-effect waves-light">Homepage</a></p>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)*/
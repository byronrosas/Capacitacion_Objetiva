import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Header
import Header from './header/header.react';
import Titulo_Inicio from './header/titulo.react';
// pagina de inicio
import Body_Presentacion from './body/presentacion/body.react';
// login
import Body_Login from './body/login/body.react';
// pagina de perfil
import Body_Perfil from './body/perfil/body.react';
// usuarios

import Usuario_Dep_Juridico from './usuarios/Departamento-Juridico/menu.react';
import Usuario_Director_Carrera from './usuarios/Director-Carrera/menu.react';
import Usuario_Docente from './usuarios/Docente/menu.react';
import Usuario_Jefe_Financiero from './usuarios/Jefe-Financiero/menu.react';
import Usuario_Recursos_Humanos from './Usuarios/Jefe-Recursos-Humanos/menu.react';
import Usuario_Jefe_Redisenio from './usuarios/Jefe-Redisenio/menu.react';
// footer
import Footer from './footer/footer.react';

export default class Layout extends React.Component {
    render (){
        let resultado = null;
        const permisos = 'JR';

        if(typeof(permisos) == "undefined") {
            resultado = 
                <div>
                    <Header />
                    <Titulo_Inicio />
                    <Router>
                        <div>
                            <Route exact path="/" component={Body_Presentacion}/>
                            <Route path="/login" component={Body_Login}/>
                            <Route path="/perfil" component={Body_Perfil}/>
                        </div>
                    </Router>
                    <Footer />
                </div>;
        } else if(typeof(permisos) != "undefined") {
            if(permisos == 'AD' || permisos == '111111') {
                resultado = 
                    <div>
                        <Header user='Administrador' />
                        <Administrador />
                        {/*falta crear*/}
                        <Footer />
                    </div>;
            } else if(permisos == 'DO' || permisos == '000001') {
                resultado = 
                    <div>
                        <Header user='Docente' />
                        <Usuario_Docente />
                        <Footer />
                    </div>;
            } else if(permisos == 'JR' || permisos == '000010') {
                resultado = 
                    <div>
                        <Header user='Jefe de Rediseño' />
                        <Usuario_Jefe_Redisenio />
                        <Footer />
                    </div>;
            } else if(permisos == 'DC' || permisos == '000100') {
                resultado = 
                    <div>
                        <Header user='Director de Carrera' />
                        <Usuario_Director_Carrera />
                        <Footer />
                    </div>;
            } else if(permisos == 'JF' || permisos == '001000') {
                resultado = 
                    <div>
                        <Header user='Jefe Financiero' />
                        <Usuario_Jefe_Financiero />
                        <Footer />
                    </div>;
            } else if(permisos == 'RH' || permisos == '010000') {
                resultado = 
                    <div>
                        <Header user='Recursos Humanos' />
                        <Usuario_Recursos_Humanos />
                        <Footer />
                    </div>;
            } else if(permisos == 'DJ' || permisos == '100000') {
                resultado = 
                    <div>
                        <Header user='Departamento Jurídico'/>
                        <Usuario_Dep_Juridico />
                        <Footer />
                    </div>;
            }
        }
        return ( <div>{resultado} </div> );
    }
}
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header  from './header/header.react';
import Titulo_Inicio from './header/titulo.react';
import Body_Presentacion from './body/presentacion/body.react';
import Body_Login from './body/login/body.react';
import Body_Perfil from './body/perfil/body.react';
import Footer from './footer/footer.react';

export default class Layout extends React.Component {
    render (){
        return (
            <div>
                <Header />
                <Titulo_Inicio />
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li> 
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/perfil">Perfil</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" component={Body_Presentacion}/>
                        <Route path="/login" component={Body_Login}/>
                        <Route path="/perfil" component={Body_Perfil}/>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>
//                     Rendering with React
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>
//                     Components
//                 </Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>
//                     Props v. State
//                 </Link>
//             </li>
//         </ul>
//         <Route path={`${match.url}/:topicId`} component={Topic}/>
//         <Route exact path={match.url} render={() => (
//             <h3>Please select a topic.</h3>
//         )}/>
//     </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )


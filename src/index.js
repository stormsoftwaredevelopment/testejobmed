import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Clinica from './admin/Clinica';
import DashBoard from './admin/Dashboard';
import Home from './admin/Home';
import Financeiro from './admin/Financeiro';
import Login from './Login/Login';
import TicketsAbertos from './admin/TicketsAbertos';
import TicketsEncerrados from './admin/TicketsEncerrados';
import Registrar from './Login/Registrar';
import HomeClinica from './clinica/Home';
import DashBoardClinica from './clinica/Dashboard';

ReactDOM.render(
    <Router history ={hashHistory}>
    <Route path='/' component={Login}/>
    <Route path='/registrar' component={Registrar}/>
    <Route path='/admin' component={Home}>
    <IndexRoute component={DashBoard}/>
        <Route path='/admin/clinica' component={Clinica}/>
        <Route path='/admin/dashboard' component={DashBoard}/>
        <Route path='/admin/Financeiro' component={Financeiro}/>
        <Route path='/admin/TicketsAbertos' component={TicketsAbertos}/>
        <Route path='/admin/TicketsEncerrados' component={TicketsEncerrados}/>
    </Route>

    <Route path='/clinica' component={HomeClinica}>
    <IndexRoute component={DashBoardClinica}/>
    </Route>
    
    </Router>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

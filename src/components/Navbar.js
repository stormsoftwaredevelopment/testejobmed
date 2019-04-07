import React from 'react';
import coins from '../images/coins-solid.svg';
import chart from '../images/chart-line-solid.svg';
import menubars from '../images/bars-solid.svg';
import {Link} from 'react-router';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#ffffff'}}>        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src={menubars} style={{width:'30px'}}/> 
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                
            <Link to='/admin' className='nav-link'><i className="fas fa-home"></i> Dashboard</Link>
            </li>
            <li className="nav-item">
            <Link to='admin/clinica' className='nav-link'><i className="fas fa-clinic-medical"></i>Clinica</Link>
            </li>
            <li className="nav-item">
            <Link to='admin/financeiro' className='nav-link'><i className="fas fa-coins"></i>Financeiro</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-ticket-alt"></i>Tickets
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
               
                <Link to='admin/ticketsAbertos' className='nav-link'>Tickets Abertos</Link>
                <Link to='admin/ticketsEncerrados' className='nav-link'>Tickets Encerrados</Link>
                </div>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default NavBar;
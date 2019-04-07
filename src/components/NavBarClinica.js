import React from 'react';
import coins from '../images/coins-solid.svg';
import chart from '../images/chart-line-solid.svg';
import menubars from '../images/bars-solid.svg';
import {Link} from 'react-router';
const NavBarClinica = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#ffffff'}}>        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src={menubars} style={{width:'30px'}}/> 
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                
            <Link to='/clinica' className='nav-link'><i className="fas fa-home"></i> Dashboard</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-ticket-alt"></i>Cadastro
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">               
                <Link to='admin/ticketsAbertos' className='nav-link'>Unidade/Posto</Link>
                <Link to='admin/ticketsEncerrados' className='nav-link'>Tickets Encerrados</Link>
                <Link to='admin/ticketsAbertos' className='nav-link'>AgendaMédica</Link>
                <Link to='admin/ticketsEncerrados' className='nav-link'>Tickets Encerrados</Link>
                <Link to='admin/ticketsAbertos' className='nav-link'>Convênio/Plano</Link>
                <Link to='admin/ticketsEncerrados' className='nav-link'>Setores</Link>
                <Link to='admin/ticketsAbertos' className='nav-link'>Fornecedores</Link>
                <Link to='admin/ticketsEncerrados' className='nav-link'>Funcionários</Link>
                <Link to='admin/ticketsEncerrados' className='nav-link'>Médico</Link>

                </div>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default NavBarClinica;
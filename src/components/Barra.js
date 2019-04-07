import React from 'react';

import logo from '../images/logo.png';
import {Link} from 'react-router';


const Barra = () => {




    return (
        <div className="barra" style={{width:'100%',backgroundColor:'#ffffff',borderBottomWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#e0e5ec',
        borderTopWidth:'0px',
        borderLeftWidth:'0px',
        borderRightWidth:'0px'}}>
        <img src={logo} className="navbar-brand" style={{width:'130px',marginTop:'10px',marginBottom:'10px'}}/>
        <Link to='/'><i className="fas fa-2x fa-sign-out-alt" style={{float:'right',marginTop:'10px',color:'#640080'}}></i>
             </Link>
        </div>
    );
};
export default Barra;
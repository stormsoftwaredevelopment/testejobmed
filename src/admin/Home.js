import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import Barra from '../components/Barra';
import "../style.css";

class Home extends Component{

    constructor(){
        super();
        this.state=({
            db:[]
        });
    }
    cardClinicasCadastradas={
        valor:'35',
        nome:'Clinicas Cadastradas'
    }
    cardMedicosCadastrados={
        valor:'80',
        nome:'Médicos Cadastrados'
    }
    
    cardPacientesCadastrados={
        valor:'35',
        nome:'Pacientes Cadastrados'
    }
    
    render(){
        return(
            <div className="" style={{backgroundColor:'#f5f7fb'}}>
            <Barra/>
            <Navbar/>           
            {this.props.children}
            </div>
            );
    }
}
export default Home;
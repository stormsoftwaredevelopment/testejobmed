import React, {Component} from 'react';
import Card from '../components/Card';
import {Link} from 'react-router';
import axios from 'axios';
import { DatePicker, message } from "antd";
import "antd/dist/antd.css";

const paragraphStyle = {
    paddingLeft:20,
    paddingTop:15,
    color:'#172b46',
    fontFamily:'Roboto Condensed',
    fontSize:'16px',
    textTransform:'uppercase',
    fontWeight:'700'
    
}
const titleTableStyle = {
    color:'#5b555d',
    fontFamily:'Roboto Condensed',
    fontSize:'12px',
    textTransform:'uppercase',
    fontWeight:'700'
    
}
const conteudoTableStyle = {
    color:'#5b555d',
    fontFamily:'Roboto Condensed',
    fontSize:'12px',
    textTransform:'uppercase',
    fontWeight:'400'
    
}
class DashBoard extends Component{

    constructor(props){
        super(props);        
    }

    
    state={
        db:[],
        date: null,
        clinicasCadastradas:[]             
        }

    handleChange = date => {
        message.info(`Selected Date: ${date ? date.format("YYYY-MM-DD") : "None"}`);
        this.setState({ date });
      };

    cardClinicasCadastradas={    
        valor:'1',
        nome:'Clinicas Cadastradas'
    }
    cardMedicosCadastrados={
        valor:'0',
        nome:'Médicos Cadastrados'
    }
    
    cardPacientesCadastrados={
        valor:'0',
        nome:'Pacientes Cadastrados'
    }
    cardExamesRealizados={
        valor:'0',
        nome:'Exames Realizados'
    }
    cardFiliaisCadastradas={
        valor:'0',
        nome:'Filiais Cadastradas'
    }
    
    cardConsultasRealizadas={
        valor:'0',
        nome:'Consultas Realizadas'
    }
    
    componentDidMount(){
        var exibir = {            
            operacao: 'exibirClinica'
        };
        axios({
            method: 'post', // verbo http
            url: 'http://localhost/jobmed/api/v1/controller/admin/Clinica.php', // url
            data: JSON.stringify(exibir),
          })
          .then(response => {
               this.setState({
                db:response.data
            });
          })
          .catch(error => {
              console.log(error)
          })
}
    render(){
        const { date } = this.state;
        return(
            <div>
        <p className="col-2"style={{textAlign:'left',marginLeft:'6%',marginTop:'15px',fontSize:'1.7em'}}>DashBoard</p>

        <div className="container row"style={{width:'80%',marginLeft:'6%',marginRight:'6%',marginTop:'5px',marginBottom:'20px'}}>
        <div className="col-6 col-sm-4 col-lg-2">
        <Card {...this.cardClinicasCadastradas}></Card>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
        <Card {...this.cardMedicosCadastrados}></Card>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
        <Card {...this.cardPacientesCadastrados}></Card>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
        <Card {...this.cardExamesRealizados}></Card>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
        <Card {...this.cardFiliaisCadastradas}></Card>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
        <Card {...this.cardConsultasRealizadas}></Card>
        </div>
        </div>
        <div className="container row col-12" style={{backgroundColor:'#f5f7fb'}}>
        <table className=" table table-hover table-responsive col-lg-6" style={{marginLeft:'6%',backgroundColor:'#ffffff'}}>
            <p style={paragraphStyle}>Clínicas Cadastradas</p>
            <thead>
                <tr style={titleTableStyle}>
                    <th scope="col">Nome do Responsável</th>
                    <th scope="col">Nome da Clínica</th>
                    <th scope="col">Telefone de Contato</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
                <tbody>
                {this.state.db.map(
                                    row=>
                                <tr key={row.id} style={conteudoTableStyle}>
                                    <td>{row.nomeDoResponsavel}</td>
                                    <td>{row.nome}</td>
                                    <td>{row.telefone}</td>
                                    <td>{row.status}</td>
                            </tr>
                                )}   
                </tbody>
            </table>   
            <table className=" table table-hover table-responsive col-lg-4" style={{marginLeft:'6%',backgroundColor:'#ffffff'}}>
            <p style={paragraphStyle}>Contas a vencer nos próximos 7 dias</p>
            <thead>
                <tr style={titleTableStyle}>
                    <th scope="col">Nome do Responsável</th>
                    <th scope="col">Nome da Clínica</th>
                    <th scope="col">Telefone de Contato</th>
                    <th scope="col">Data de Vencimento</th>
                </tr>
            </thead>
                <tbody>
                {this.state.db.map(
                                    row=>
                                <tr key={row.id} style={conteudoTableStyle}>
                                    <td>{row.nomeDoResponsavel}</td>
                                    <td>{row.nome}</td>
                                    <td>{row.telefone}</td>
                                    <td>{row.status}</td>
                            </tr>
                                )}   
                </tbody>
            </table>      

            </div> 
            
        <div className="container row col-12" style={{backgroundColor:'#f5f7fb'}}>
        <table className=" table table-hover table-responsive" style={{marginLeft:'6%',backgroundColor:'#ffffff'}}>
            <p style={paragraphStyle}>Medicos cadastrados</p>
            <thead>
                <tr style={titleTableStyle}>
                    <th scope="col">Nome do Médico</th>
                    <th scope="col">Telefone de Contato</th>
                    <th scope="col">Especialidade</th>
                    <th scope="col">Atendimentos Realizados</th>
                </tr>
            </thead>
                <tbody>
                {this.state.db.map(
                                    row=>
                                <tr key={row.id} style={conteudoTableStyle}>
                                    <td>{row.nomeDoResponsavel}</td>
                                    <td>{row.nome}</td>
                                    <td>{row.telefone}</td>
                                    <td>{row.status}</td>
                            </tr>
                                )}   
                </tbody>
            </table> 
        </div>
        </div>
        
        );
    }
}
export default DashBoard;
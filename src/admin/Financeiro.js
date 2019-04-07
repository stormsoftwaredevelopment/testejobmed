import React, {Component} from 'react';
import axios from 'axios';
import Modal from '../components/Modal';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { URL_API } from '../helpers/types';
var ajax = require('react-ajax');
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

const inputStyle={
    backgroundColor:'#ffffff',
    width:300,
    height:30,
    borderWidth:1,
    marginBottom:5,
    borderRadius:4,
    borderColor:'#e7e7e7',
    display: 'block'
}
const labelStyle = {
    display: 'block',
    marginBottom:2,
    textTransform:'uppercase',
    fontSize:'12px',
    fontWeight:700
}
class Financeiro extends Component{

    constructor(props) {
        super(props);
    
        this.onChange = this.onChange.bind(this);        
        this.onSave = this.onSave.bind(this);    
        this.onUpdate = this.onSave.bind(this);
    }


   state = {
            db:[],
            show:false,
            recebido: '',
            valor: '',
            referente: '',
            validade: '',
            dataDeRecebimento: '',
            tipoDeRecebimento: '',
            successCreation: null
        }
       


    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state); 

    }

    onUpdate(e){


        e.preventDefault();

    }
    

    onSave(e){
        //data in the form
        var form_data = {            
            recebido: this.state.recebido,
            valor: this.state.valor,
            referente: this.state.referente,
            validade: this.state.validade,
            dataDeRecebimento: this.state.dataDeRecebimento,
            tipoDeRecebimento: this.state.tipoDeRecebimento,
            operacao:'criarLancamento'
        };
        console.log(form_data);


        axios({
            method: 'post', // verbo http
            url: 'http://localhost/jobmed/api/v1/controller/admin/Financeiro.php', // url
            data: JSON.stringify(form_data),
          })
          .then(response => {
              console.log(response)
              //api message
              this.setState({successCreation: response['message']});
              //this.setState({successCreation: JSON.stringify(form_data)});

              //empty form
              this.setState({recebido: ""});
              this.setState({valor: ""});
              this.setState({referente: ""});
              this.setState({validade: ""});
              this.setState({dataDeRecebimento: ""});
              this.setState({tipoDeRecebimento: ""});
          })
          .catch(error => {
              console.log(error)
          })
        e.preventDefault();
    }


    
    showModal = ()=>{
        this.setState({            
        ...this.state,
        show :!this.state.show
        });
    }

    insertDados = ()=>{ 
       alert('Preencha os dados antes de Continuar');

    }
componentDidMount(){
        var exibir = {            
            operacao: 'exibirFinanceiro'
        };
        axios({
            method: 'post', // verbo http
            url: 'http://localhost/jobmed/api/v1/controller/admin/Financeiro.php', // url
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
        return(
            <React.Fragment>
                {
                this.state.successCreation == "Product was created." ?
                    <div className="alert alert-success">
                        Product Was Saved.
                    </div>
                : null
            }
                
            <Button  variant="outlined" color="primary" onClick={this.showModal} style={{marginTop:'20px',marginLeft:'6%'}}>Registrar Lançamento</Button>
             
             <table className="table table-hover table-responsive col-lg-7" style={{
                    marginLeft:'6%',
                    marginRight:'6%',
                    backgroundColor:'#ffffff',marginTop:'10px'}}>
            <thead>
            <tr style={titleTableStyle}>
            <th scope="col">Recebido de</th>
            <th scope="col">Valor</th>
            <th scope="col">Referente a:</th>
            <th scope="col">Validade</th>
            <th scope="col">Data de Recebimento</th>
            <th scope="col">Tipo de Recebimento</th>
            </tr>
            </thead>
            <tbody>
            {this.state.db.map(
                row=>
            <tr key={row.id} onClick={this.showModal} style={conteudoTableStyle}>
                <td>{row.recebido}</td>
                <td>{row.valor}</td>
                <td>{row.referente}</td>
                <td>{row.validade}</td>
                <td>{row.dataDeRecebimento}</td>
                <td>{row.tipoDeRecebimento}</td>
            </tr>
            )}   
            </tbody>
            </table>
            
            <Modal 
            onClose={this.showModal}
            show={this.state.show}>
            <form onSubmit={this.onSave} className="form-responsive"> 
                    <div>
                        <label style={labelStyle}>Recebido de:</label>
                        <input type="text" style={inputStyle}
                                    name="recebido"
                                    value={this.state.recebido}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Valor</label>
                        <input type="text" style={inputStyle}
                        name="valor"
                                    value={this.state.valor}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Referente</label>
                        <input type="text" style={inputStyle}
                        name="referente"
                        value={this.state.referente}
                        required
                        onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Validade</label>
                        <input type="text" style={inputStyle}
                        name="validade"
                        value={this.state.validade}
                        required
                        onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Data de Recebimento</label>
                        <input class="datepicker"type="date" style={inputStyle}
                        name="dataDeRecebimento"
                        value={this.state.dataDeRecebimento}
                        required
                        onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Tipo de Recebimento</label>
                        <input type="text" style={inputStyle}
                        name="tipoDeRecebimento"
                        value={this.state.tipoDeRecebimento}
                        required
                        onChange={this.onChange}/>
                    </div>
                    <Button  variant="outlined" color="primary" onClick={this.onSave} style={{paddingLeft:'10px',paddingRight:'10px'}}>Salvar</Button>
                    </form>
            </Modal>        
            </React.Fragment>
            );
    }


}
export default Financeiro;
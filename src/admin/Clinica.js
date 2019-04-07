import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Modal from '../components/Modal';
import { URL_API } from '../helpers/types';

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
class Clinica extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);        
        this.onSave = this.onSave.bind(this);
    }
    state = {
        db:[],
        show:false,
        id:'',
        date: null,
        usuario: ' ',
        senha: ' ',
        email: ' ',
        nomeDoResponsavel: ' ',
        nome: ' ',
        documento: ' ',
        telefone: ' ',
        cep: ' ',
        logradouro: ' ',
        bairro: ' ',
        cidade: ' ',
        uf: ' ',
        dataDeCadastro: ' ',
        dataDeRenovacao: ' ',
        dataDeVencimento: ' ',
        periodoDeRenovacao: ' ',
        dominio: ' ',
        status: ' ',
        medicosCadastrados: ' ',
        medicosPermitidos: ' ',
        filiaisCadastradas: ' ',
        filiaisPermitidas: ' ',
        successCreation: null
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state); 

    }

    onSave(e){
        //data in the form
        var form_data = {            
            usuario:this.state.usuario,
            senha:this.state.senha,
            email:this.state.email,
            nomeDoResponsavel:this.state.nomeDoResponsavel,
            nome:this.state.nome,
            documento:this.state.documento,
            telefone:this.state.telefone,
            cep:this.state.cep,
            logradouro:this.state.logradouro,
            bairro:this.state.bairro,
            cidade:this.state.cidade,
            uf:this.state.uf,
            dataDeCadastro:'2019/04/05',
            dataDeRenovacao:'2019/04/05',
            dataDeVencimento:'2019/05/05',
            periodoDeRenovacao:'30',
            dominio:this.state.dominio,
            status:'Disponível',
            medicosCadastrados:'0',
            medicosPermitidos:this.state.medicosPermitidos,
            filiaisCadastradas:'0',
            filiaisPermitidas:this.state.filiaisPermitidas,
            operacao:'cadastrarClinica'
        };
        console.log(form_data);


        axios({
            method: 'post', // verbo http
            url: 'http://localhost/jobmed/api/v1/controller/admin/Clinica.php', // url
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

   

    showModal = ()=>{
        this.setState({            
        ...this.state,
        show :!this.state.show
        });
    }



    render(){
        return(
        <React.Fragment>
            <Button  variant="outlined" color="primary" onClick={this.showModal} style={{marginTop:'20px',marginLeft:'6%'}}>Cadastrar Clínica</Button>
            <table className="table table-hover table-responsive col-lg-11" style={{marginLeft:'6%',backgroundColor:'#ffffff'}} >
            <thead>
            <tr style={titleTableStyle}>
            <th scope="col">Nome</th>
            <th scope="col">Nome Do Responsável</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
            <th scope="col">Data de Cadastro</th>
            <th scope="col">Medicos Cadastrados</th>
            <th scope="col">Medicos Permitidos</th>
            <th scope="col">Filiais Cadastradas</th>
            <th scope="col">Filiais Permitidas</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {this.state.db.map(
                row=>
            <tr key={row.id} style={conteudoTableStyle}>
                <td>{row.nome}</td>
                <td>{row.nomeDoResponsavel}</td>
                <td>{row.email}</td>
                <td>{row.telefone}</td>
                <td>{row.dataDeCadastro}</td>
                <td>{row.medicosCadastrados}</td>
                <td>{row.medicosPermitidos}</td>
                <td>{row.filiaisCadastradas}</td>
                <td>{row.filiaisPermitidas}</td>
                <td>{row.status}</td>
                <td><Button  variant="outlined" color="primary" style={{paddingLeft:'10px',paddingRight:'10px'}}>Bloquear</Button>
</td>
                
            </tr>
            )}   
            </tbody>
            </table>

            <Modal 
            onClose={this.showModal}
            show={this.state.show}> 
            <form className="form-responsive" onSubmit={this.onSave}> 
                    <div>
                        <label style={labelStyle}>RazãoSocial</label>
                        <input type="text" style={inputStyle}
                                    name="nome"
                                    value={this.state.nome}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>CNPJ</label>
                        <input type="text" style={inputStyle}
                                    name="documento"
                                    value={this.state.documento}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Telefone</label>
                        <input type="text" style={inputStyle}
                                    name="telefone"
                                    value={this.state.telefone}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>CEP</label>
                        <input type="text" style={inputStyle}
                                    name="cep"
                                    value={this.state.cep}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Logradouro</label>
                        <input type="text" style={inputStyle}
                                    name="logradouro"
                                    value={this.state.logradouro}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Bairro</label>
                        <input type="text" style={inputStyle}
                                    name="bairro"
                                    value={this.state.bairro}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Cidade</label>
                        <input type="text" style={inputStyle}
                                    name="cidade"
                                    value={this.state.cidade}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>UF</label>
                        <input type="text" style={inputStyle}
                                    name="uf"
                                    value={this.state.uf}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Nome do Responsável</label>
                        <input type="text" style={inputStyle}
                                    name="nomeDoResponsavel"
                                    value={this.state.nomeDoResponsavel}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Email</label>
                        <input type="text" style={inputStyle}
                                    name="email"
                                    value={this.state.email}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Usuário</label>
                        <input type="text" style={inputStyle}
                                    name="usuario"
                                    value={this.state.usuario}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Senha</label>
                        <input type="text" style={inputStyle}
                                    name="senha"
                                    value={this.state.senha}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Dominio</label>
                        <input type="text" style={inputStyle}
                                    name="dominio"
                                    value={this.state.dominio}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Medicos Permitidos</label>
                        <input type="text" style={inputStyle}
                                    name="medicosPermitidos"
                                    value={this.state.medicosPermitidos}
                                    required
                                    onChange={this.onChange}/>
                    </div>
                    <div>
                        <label style={labelStyle}>Filiais Permitidas</label>
                        <input type="text" style={inputStyle}
                                    name="filiaisPermitidas"
                                    value={this.state.filiaisPermitidas}
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
export default Clinica;
import React,{Component} from 'react';
import Logo from '../images/logo.png';
import {Link} from 'react-router';
class Registrar extends Component{
     constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: ''
    }
   
}

   cadastrar(){
       alert('Usuario Cadastrado');
    }



    render(){
        return(
            <div className="login" style={{width:'100%'}}>
            <form className="form" style={{width:'50%',marginLeft:'25%',marginRight:'25%',position:'relative'}}>

            <img src={Logo} style={{width:'40%',marginLeft:'30%',marginTop:'20%',marginBottom:'50px'}}/>
                
                    <input type="text" placeholder="Nome da Clinica" name="username"onChange = {this.onChange} 
                style={{
                    backgroundColor:'#ffffff',
                    borderRadius:'5px',
                    marginRight:'10px',
                    marginBottom:'10px',
                    height:'40px',
                    marginLeft:'25%',
                    paddingInlineStart:'10px',
                    width:'50%'}}/>
                    <input type="text" placeholder="Responsável" name="username"onChange = {this.onChange} 
                style={{
                    backgroundColor:'#ffffff',
                    borderRadius:'5px',
                    marginRight:'10px',
                    marginBottom:'10px',
                    height:'40px',
                    marginLeft:'25%',
                    paddingInlineStart:'10px',
                    width:'50%'}}/>
                    <input type="text" placeholder="login" name="username"onChange = {this.onChange} 
                style={{
                    backgroundColor:'#ffffff',
                    borderRadius:'5px',
                    marginRight:'10px',
                    marginBottom:'10px',
                    height:'40px',
                    marginLeft:'25%',
                    paddingInlineStart:'10px',
                    width:'50%'}}/>
                <input type="password" placeholder="senha" name="password" onChange = {this.onChange} 
                style={{
                    backgroundColor:'#ffffff',
                    borderRadius:'5px',
                    marginRight:'10px',
                    marginBottom:'10px',
                    height:'40px',
                    marginLeft:'25%',
                    paddingInlineStart:'10px',
                    width:'50%'}}/>
                <button className="btn btn-primary"style={{
                    backgroundColor:'#640080',
                    borderColor:'#640080',
                    borderRadius:'5px',
                    marginRight:'10px',
                    marginBottom:'10px',
                    height:'40px',
                    marginLeft:'25%',
                    width:'50%'}} onClick={this.cadastrar}>Cadastrar</button>

                    <Link to='/'><p style={{textAlign:'center',color:'#000000'}}>Voltar</p></Link>
            </form>
            

            </div>
            );
    }
}
export default Registrar
import React,{Component} from 'react';
import Logo from '../images/logo.png';
import {Link} from 'react-router';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
const inputStyle={
    backgroundColor:'#ffffff',
    width:300,
    height:40,
    borderWidth:1,
    marginBottom:5,
    borderRadius:4,
    borderColor:'#e7e7e7',
    height:'40px',
    marginLeft:'25%',
    paddingInlineStart:'10px',
    width:'50%'
}

class Login extends Component{
     constructor() {
         
    super();
    this.state = {
        dominio:'',
        username: '',
        password: '',
        redirectToReferrer: false
       };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
   
}

   login(e){      
    var user_data = {
        dominio:this.state.dominio,
        username: this.state.username,
        password: this.state.password,           
        operacao:'login'
    };
    axios({
        method: 'post', // verbo http
        url: 'http://localhost/jobmed/api/v1/controller/login.php', // url
        data: JSON.stringify(user_data),
      })
      .then(response => {
          console.log(response)
                   
      })
      .catch(error => {
          console.log(error)
      })
      this.setState({ redirectToReferrer: true });
    e.preventDefault();
    }



    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state); 

    }

    render(){
        
        return(
            <div className="login" style={{width:'100%'}}>   
            <form className="form" style={{width:'50%',marginLeft:'25%',marginRight:'25%',position:'relative'}}>

            <img src={Logo} style={{width:'40%',marginLeft:'30%',marginTop:'20%',marginBottom:'50px'}}/>
                <input type="text" placeholder="dominio" name="dominio"onChange = {this.onChange} 
                style={inputStyle}/>
                <input type="text" placeholder="usuario" name="username"onChange = {this.onChange} 
                style={inputStyle}/>
                <input type="password" placeholder="senha" name="password" onChange = {this.onChange} 
                style={inputStyle}/>
                <button className="btn btn-primary"style={{
                    backgroundColor:'#640080',
                    borderColor:'#640080',
                    borderRadius:'5px',
                    marginRight:'10px',
                    marginBottom:'10px',
                    height:'40px',
                    marginLeft:'25%',
                    textTransform:'uppercase',
                    width:'50%'}} onClick={this.login}>Entrar</button>

                    <Link to='/registrar'><p style={{textAlign:'center',color:'#000000'}}>Registrar Usuário</p></Link>
            </form>
            

            </div>
            );
    }
}
export default Login
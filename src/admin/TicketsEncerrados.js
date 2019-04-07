import React, {Component} from 'react';
import axios from 'axios';
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
class TicketsEncerrados extends Component{

    constructor(){
        super();
        this.state=({
            db:[]
        });
    }
    componentDidMount(){
        axios.get('http://localhost/jobmed/api/v1/controller/admin/teste/ticket.php?&item=exibirticketencerrado')
        .then(res=>{
            console.log(res.data);
            this.setState({
                db:res.data
            });
        })
    }

    render(){
        return(
            <table className="table table-hover table-responsive col-lg-6" style={{marginLeft:'6%',marginRight:'6%',backgroundColor:'#ffffff',marginTop:'10px'}}>
            <thead>
            <tr style={titleTableStyle}>
            <th scope="col">Id</th>
            <th scope="col">Aberto Por</th>
            <th scope="col">Data de Abertura</th>
            <th scope="col">Problema</th>
            <th scope="col">Solução</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {this.state.db.map(
                row=>
            <tr key={row.id} style={conteudoTableStyle}>
            <td>{row.id}</td>
                <td>{row.abertoPor}</td>
                <td>{row.dataDeAbertura}</td>
                <td>{row.problema}</td>
                <td>{row.solucao}</td>
                <td>{row.status}</td>
                
            </tr>
            )}   
            </tbody>
            </table>
        );
    }
}
export default TicketsEncerrados;
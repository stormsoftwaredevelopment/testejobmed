import React from 'react';
import {Link} from 'react-router';
import Button from '../components/Button';
const Table = (props) => {
return (
    <div className={props.size}style={{backgroundColor:'#ffffff',marginLeft:'10%',marginTop:'10px'}}>
   
    <p style={{fontSize:'1.2em',margin:'20px',fontWeight:'500',color:'#333'}}>Clinicas</p>
    <table className={props.tablesize} >
    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Status</th>
            <th scope="col">Data de Cadastro</th>
            <th scope="col">Data de Renovação</th>
            <th scope="col">Filiais Cadastradas</th>
            <th scope="col"></th>
        </tr>
    </thead>
        <tbody>
        {props.arrayClinicas.map(
                            row=>
                        <tr key={row.id}>
                            <td>{row.nome}</td>
                            <td>{row.status}</td>
                            <td>{row.dataDeCadastro}</td>
                            <td>{row.unidadesCadastradas}</td>
                            <td><Link to={`/admin/CardClinica?id=${row.id}`} ><Button nome="Ver Detalhes"/></Link></td>
                    </tr>
                        )}   
        </tbody>
    </table>
    </div>
);
};

export default Table;
import React, {Component} from 'react';
import Navbar from '../components/NavBarClinica';
import Barra from '../components/Barra';
import "../style.css";

class Home extends Component{
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
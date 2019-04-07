import React from 'react';


const Card = (props) => {
    
    return (
        <div className="card" style={{padding:'5px',textAlign:'center',margin:'5px'}}>
        <p style={{fontWeight:'700',fontSize:'1.5em',margin:'0px'}}>{props.valor}</p>
        <p style={{fontSize:'1em',margin:'0px'}}>{props.nome}</p>
        </div>
    );
};

export default Card;
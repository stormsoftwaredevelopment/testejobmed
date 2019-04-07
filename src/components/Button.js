import React from 'react';
const Button = (props) => {
    
    return (
    <button type="button" class="btn btn-primary btn-sm">{props.nome}</button>
    );
};

export default Button;
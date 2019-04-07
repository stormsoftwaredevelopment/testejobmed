import React from 'react';

import CloseIcon from '@material-ui/icons/Close';

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,    
    overflow: 'auto'
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    margin: '0 auto',
    padding: 30,
    position: "relative",
    overflow:'hidden'
};

const close={
    position:"absolute",
    right:20,
}
export default class Modal extends React.Component{
    onClose = (e) => {
        console.log("BUTTON CLICKED");
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if(!this.props.show){
            return null;
        }
        return(
            <div style={backdropStyle}>
                <div style={modalStyle}>
                <CloseIcon style={close} onClick={(e) => {this.onClose(e)}}/>
                {this.props.children}
                </div>
            </div>
        );
    }

}
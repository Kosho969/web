import React from 'react';

export default class ButtonAction extends React.Component{
    render(){
        return(
            <button 
className={'waves-effect waves-light btn-large'}
                style={{width:'100%' ,fontSize:'3em'}}
            onClick={this.props.onClick}> {this.props.action} </button>
        )
    }
}

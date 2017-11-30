import React from 'react';

export default class Button extends React.Component{
    render(){
        return(
            <button className={'waves-effect waves-light btn-large'}
                style={{width:'100%' ,fontSize:'3em'}}
             onClick={this.props.onClick} tabIndex={this.props.number} >{this.props.number}</button>
        )
    }
}

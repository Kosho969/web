import React from 'react';

export default class Display extends React.Component{
    render(){
        return(
            <input value={this.props.value}/>
        )
    }
}

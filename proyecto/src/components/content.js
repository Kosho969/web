import React, { Component } from 'react';
import '../App.css'
class Content extends Component{

render() {
  return(
    <nav className="nav-extended  grey lighten-5" style={{marginLeft:'160px', width:'1200px'}}>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab" ><a  style={{color:'#000'}} href="#test1">Todo</a></li>
        <li className="tab"><a style={{color:'#000'}} className="active" href="#test2">Proyectos</a></li>
        <li className="tab disabled"><a  style={{color:'#000'}}href="#test3">Trabajos</a></li>
        <li className="tab"><a style={{color:'#000'}} href="#test4">Hobbies</a></li>
      </ul>
    </div>
</nav>
    );
  }

}

export default Content;






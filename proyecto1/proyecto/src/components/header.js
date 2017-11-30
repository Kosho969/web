import React, { Component } from 'react';
import '../App.css'
import logo from './img/logo.png'
class Header extends Component{

render() {
  return(
    <nav className="black" style={{height:'49px'}} >
    <div >
      <ul>
      <li style={{marginTop:'2px'}}><img className="myLogo" src={logo}/></li>
      
      </ul>
      <ul id="nav-mobile" className="hide-on-med-and-down">
        <li><a href="sass.html">
          <div style={{height: '48px'}} className="primerBoton"> Lista de Exitos</div>
        </a></li>
        <li>
        <div className="center row " style={{width:' 46em'}}>
          <div className="col s12 " >
            <div className="  row "style={{height:'44px',marginTop:'2px', borderStyle:'solid', borderColor:'black', borderRadius:'5px'}} id="topbarsearch">
              <div className="  grey lighten-5 input-field col s6 s12 red-text" style={{borderRadius: '10px',color:'black'}}>
                <i style={{position: 'absolute', bottom:'-10px', right:'8px'}}className=" red-text material-icons prefix tiny right">search</i>
                <input style={{color:'black'}} type="text" placeholder="Buscar artistas, grupos, pistas y podcasts" id="autocomplete-input" className=" left autocomplete red-text"/ >
                </div>
              </div>
            </div>
          </div> 
      </li>
        <li ><a className="primerBoton" style={{height: '48px'}} href="badges.html">Inicia Sesión</a></li>
        <li><a className="account " style={{height: '48px'}} href="collapsible.html">Crea tu cuenta</a></li>
        <li><a className="primerBoton" style={{height: '48px'}} href="collapsible.html">Subir</a></li>
        <li>
          <a style={{position: 'absolute', top:'2px', height:'45px'}}  class="btn-floating btn-large black">
          <i class="material-icons">menu</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
    );
  }

}

export default Header;

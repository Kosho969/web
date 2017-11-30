import React, { Component } from 'react';
import '../App.css'
import logo from './img/logo.jpg'
class Header extends Component{

render() {
  return(
    <nav className="black" style={{height:'49px'}} >
    <div >
      <ul>
      <li style={{marginTop:'2px'}}><a  href="https://www.facebook.com/pablo.koch1"><img className="myLogo" src={logo}/></a></li>
      
      </ul>
      <ul id="nav-mobile" className="hide-on-med-and-down">
        <li><a href="sass.html">
          <div style={{height: '48px'}} className="primerBoton"> Información</div>
        </a></li>
        <li>
        <div className="center row " style={{width:' 46em'}}>
          <div className="col s12 " >
            <div className="  row "style={{height:'44px',marginTop:'2px', borderStyle:'solid', borderColor:'black', borderRadius:'5px'}} id="topbarsearch">
              <div className="  blue lighten-5 input-field col s6 s12 align-center" style={{borderRadius: '10px',color:'black'}}>
                 <h5 className="estilacho">"Debes ser el cambio que deseas ver en el mundo"</h5>
                
                </div>
              </div>
            </div>
          </div> 
      </li>
        <li ><a className="primerBoton" style={{height: '48px'}} href="badges.html">Contacto</a></li>
        <li><a className="account " style={{height: '48px'}} href="collapsible.html">FAQ</a></li>
        <li><a className="primerBoton" style={{height: '48px'}} href="collapsible.html">Conoce Más</a></li>
        <li>
          <a style={{position: 'absolute', top:'2px', height:'45px'}}  class=" right btn-floating btn-large black">
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

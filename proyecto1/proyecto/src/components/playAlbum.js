import React, { Component } from 'react';
import '../App.css'
import logo from './img/logo.png'
import profile from './img/profile.jpg'
import album1 from './img/album1.jpeg'
class PlayAlbum extends Component{

render() {
  return(
    <div className="mainCover2" >
      <div className="container" style={{marginLeft:'50px'}}>
        <div className="row">
          
          <div className="col m3" style={{marginTop:'-18px'}}>
            <img className=" circle responsive-img" src={album1}/>
          </div>
          <div className="col m3">
            <div className="col m6">
                <div className="row left-align"  style={{marginBottom:'0px'}}>
                  <h5 className="perfiles">With You</h5>
                </div>
            </div>
            <div className="col m8">
                <div className="row left-align"  style={{marginBottom:'0px'}}>
                  <h6 className="perfiles">Zeni</h6>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    );
  }

}

export default PlayAlbum;

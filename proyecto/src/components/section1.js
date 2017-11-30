import React, { Component } from 'react';
import '../App.css'
import album1 from './img/chat.png'
class Section extends Component{



render() {
  return(
      <div className="container">
      <div className="row left-align " style={{marginLeft:'10px'}}>
      <div className="col s12 m12 l12">
      </div>
      </div>
       
       <div className="row">
          <div className="col s3 m3 l3">
            <img className="myAlbum" src={album1}/>
          </div>
          <div className="col s9 m9 l9">
             <ul className="collection" style={{borderStyle:'none',width:'745px'}}>
                
                <li className="collection-item avatar">
                  
                   
                    <i href="https://codepen.io/Kosho969/pen/gRqVRa?editors=0010#0"  className=" btn-floating btn-small waves-effect waves-light purple material-icons circle red">
                      <a href="https://github.com/Kosho969/web/tree/master/Lab3">
                      backup
                      </a> 
                    </i>

             
                  
                  <span className="title left">Chat (Click to see)</span> <br/>
                  <p className=" left">Se desarollo con javascript y html 
                  </p>
                  <a href="#!" className="secondary-content">
                    
                      <div className="chip">
                        #Feels
                        
                      </div>
                  </a>
                </li>
             </ul>
          </div>
        </div>

      </div>
    );
  }

}

export default Section
;






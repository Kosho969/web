import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Banner from './components/banner.js'
import Content from './components/content.js'
import Section from './components/section.js'
import PlayAlbum from './components/playAlbum.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      albumCover:false
    }

  }

  setCover(){
    if(this.state.albumCover == false)
      this.setState({
        albumCover:true
      })
    else{
      this.setState({
        albumCover:false
      })
    }
  }

  render() {
    return (

      <div className="App grey lighten-3" >
        <Header/>
        <div className="container" style={{marginLeft:'-100px'}}>
            <div className="col s12 m12 l12">
              {this.state.albumCover?<PlayAlbum />:<Banner/>}
              <Content />
            </div>
        </div>
        <div className="container" style={{marginLeft:'60px', backgroundColor:'white'}}>
            <div className="col s9 m9 l9" style={{marginLeft:'-165px'}}>
              <Section setCover={this.setCover.bind(this)} albumCover={this.state.albumCover} />
            </div>
        </div>
      </div>
    );
  }
}

export default App;

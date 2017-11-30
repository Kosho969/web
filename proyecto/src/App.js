import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Banner from './components/banner.js'
import Content from './components/content.js'
import Section from './components/section.js'
import Section1 from './components/section1.js'
import Section2 from './components/section2.js'
import Section3 from './components/section3.js'
import Section4 from './components/section4.js'
import Section5 from './components/section5.js'
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
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
            </div>
        </div>
      </div>
    );
  }
}

export default App;

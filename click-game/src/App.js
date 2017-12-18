import React, { Component } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import Images from './images.json';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p></p>
        <div className="Content">
          <ImageCard
            array={Images}
          />     
        </div>
      </div>
    );
  }
}

export default App;

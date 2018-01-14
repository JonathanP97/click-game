import React, { Component } from 'react';
import './App.css';
import Images from './images.json';
import Main from './components/Main';

class App extends Component {
  render() {
    return ( 
      <div className="App"> 
        <Main data={Images}/>
      </div>
    );
  }
}

export default App;

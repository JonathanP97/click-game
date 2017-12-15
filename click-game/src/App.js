import React, { Component } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import Images from './images.json';
console.log(Images[0])
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome</h1>
        </header>
        <p></p>
        <div className="Content">
          
          {Images.map(obj => (
            <ImageCard 
              name={obj.name} 
              img={obj.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

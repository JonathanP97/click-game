import React, { Component } from "react";
import "./Main.css";
// import ImageCard from "../ImageCard";

class Main extends Component {
  constructor(props) {
  	super(props);
    
    this.state = {
      match: null,
      points: 0,
      msg: "click an image to begin"
    };
  	this.handleClick = this.handleClick.bind(this);
    this.newCharacter = this.newCharacter.bind(this);
  }

  // sets a new character to state
  componentDidMount() {
    this.newCharacter();
  }

  // Generates random number 
  // Random number is used to select a character from image array
  newCharacter() {
    var temp = Math.floor((Math.random() * this.props.data.length) + 1);
    var objective = this.props.data[temp].name;
    this.setState({match: objective});
  }

  handleClick(event) {
    var userGuess = event.target.alt;
    var char = this.state.match;
    var p = this.state.points;

    // console.log(char);
    // console.log(userGuess);

    if(char === userGuess) {
      p ++;
      this.setState({
        msg: "Nice! we got a match",
        points: p,
      });
    } else {
      p --;
      this.setState({
        msg: "Whoops sorry, no match",
        points: p,
      });
    }
    this.newCharacter();
  }

  render(props) {
  	return(
      <div>
        <div className="header">
          <h1>Clicky Click</h1>
        </div>

        <div className="status">
          <h3>Find {this.state.match}! </h3>
          <h4>Points: {this.state.points} </h4>
          <p>{this.state.msg}</p>
        </div>

        <div className="content">  
          {this.props.data.map(obj => {
            return (
              <div className="col-test" key={obj.id}>
                <div className="img-holder" key={obj.id}>
                  <img
                    onClick={this.handleClick}
                    key={obj.id}
                    id={obj.id}
                    alt={obj.name}
                    src={obj.image}
                  />
                </div>
              </div>
            )
          })}
        </div>

      </div>
      
  	);
  }
}

export default Main;
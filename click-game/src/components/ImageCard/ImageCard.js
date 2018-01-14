import React, { Component } from "react";
import "./ImageCard.css";
// import Images from '../../images.json';

class ImageCard extends Component {
  constructor(props) {
  	super(props);
   //  this.state = {
   //    match: null
   //  };
  	// this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.setState({match: 0}, () => {
    //   console.log(this.state.match);
    // });
    console.log(this.props);
  }

  handleClick(id, e) {
    const num = id;

    console.log(num);
    console.log(this.state);
    console.log(this.state.match);

    if(this.state.match === 0 && this.state.match !== typeof Number ) {
      this.setState({match: id}, () => {
        console.log(this.state.match);
      });
    } else {
      // if (this.state !== null && this.state.match === num) {
      //   console.log("got a match");
      // }
    }
  }

  render(props) {
  	return(
   //    <div>
   //      <h3>hi</h3>
   //    </div>
        <img 
          id={this.props.id}
          alt={this.props.alt}
          source={this.props.src}
        />
  	);
  }
}

export default ImageCard;
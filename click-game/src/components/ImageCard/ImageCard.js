import React from "react";
import "./ImageCard.css";

const ImageCard = props => (

  <div className="card">
  	<div className="img-container">
  		<img alt={props.name} src={props.img}/>
  	</div>
  	<p>{props.name}</p>
  </div>
);

export default ImageCard;
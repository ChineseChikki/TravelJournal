import React from "react";
import { ILocation } from "../utils/icons";
import "./Card.css";

const Card = (props) => {
  // console.log(); to see what the object has in the browser
  // use the same spelling in your data .js meaning where you called the object when passing in you props.
  return (
    <div className="card-container">
      <div className="main--container">
        <img className="main-img" src={props.imageUrl} alt="" />
      </div>

      <div className="info">
        <div className="location">
          <img src={ILocation} alt="" className="small-icon" />
          <h6>{props.location}</h6>
          <a href={props.googleMapsUrl} target="_blank">
            {" "}
            View on Google Maps
          </a>
        </div>
        <h2 className="title">{props.title}</h2>
        <h6 className="data">
          {props.startDate} - {props.endDate}
        </h6>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;

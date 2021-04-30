import React from "react";
import "animate.css";

const GifGridItem = (props) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={props.img.url} alt={props.img.title} />
      <p>{props.img.title}</p>
    </div>
  );
};

export default GifGridItem;

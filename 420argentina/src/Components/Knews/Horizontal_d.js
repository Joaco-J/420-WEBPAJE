import React from "react";
import PropTypes from "prop-types";
import "./Horizontal_d.css";

function DispText(props) {
  return (
    <div>
      <h1>{props.tittle}</h1>
      <p>{props.text}</p>
    </div>
  );
}
function DispImage(props) {
  return (
    <div>
      <img src={props.image} />
    </div>
  );
}

function Horizontal_d(props) {
  return (
    <div class="Main">
      {props.LRDir && DispImage(props.image)}
      {DispText(...{ props })}
      {!props.LRDir && DispImage(props.image)}
    </div>
  );
}

Horizontal_d.propTypes = {
  tittle: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,

  LRDir: PropTypes.bool,
};

export default Horizontal_d;

import React from "react";
import PropTypes from "prop-types";
import "./Horizontal_d.css";

import colors from "../../Colors";

function Disptext(props) {
  console.log(props);
  return (
    <div class="textC" style={{ backgroundColor: colors.primary }}>
      <h1>{props.tittle}</h1>
      <p>{props.text}</p>
    </div>
  );
}
function Dispimage(props) {
  return (
    <div class="ImagC">
      <img class="Imag" src={props.image} alt="hello" />
    </div>
  );
}

function Horizontal_d(props) {
  return (
    <div class="Main">
      {props.LRDir && <Dispimage {...props} />}
      {<Disptext {...props} />}
      {!props.LRDir && <Dispimage {...props} />}
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

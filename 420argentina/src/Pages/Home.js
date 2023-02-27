import PropTypes from "prop-types";
import React, { Component } from "react";

export class Home extends Component {
  static propTypes = {};
  state = {
    knews: {
      Hola: {
        tittle: "noooooooooooooooooooooo",
        text: "holadfasdfa asdfdfasdfasdf asdf asdfasdfa sdf adf  f dddsa dsafasd fsa df ff adsfa sdf df f da f asdf a df",
        image: "https://tinypng.com/images/social/website.jpg",
      },
    },
  };

  render() {
    return <div>Home</div>;
  }
}

export default Home;

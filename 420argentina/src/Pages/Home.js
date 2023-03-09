import React, { Component } from "react";

import Horizontal_d from "../Components/Knews/Horizontal_d";

const knews = {
  Hola: {
    tittle: "noooooooooooooooooooooo",
    text: "holadfasdfa asdfdfasdfasdf asdf asdfasdfa sdf adf  f dddsa dsafasd fsa df ff adsfa sdf df f da f asdf a df",
    image: "https://tinypng.com/images/social/website.jpg",
  },
  nose: {
    tittle: "adfasdfasdfsadf",
    text: "adsfjhasjkdfhlkh afdhslakdfhkjlasdh fkahsdf kahdfkj ahfklj ha",
    image:
      "https://th.bing.com/th/id/R.1395d1b17397018e6916784c283a14f2?rik=bmfmSW7odc2D1A&pid=ImgRaw&r=0",
  },
};
export class Home extends Component {
  static propTypes = {};
  state = {};

  render() {
    return (
      <div class="Main">
        {Object.keys(knews).map(function (key, index) {
          return <Horizontal_d key={index} LRDir={true} {...knews[key]} />;
        })}
      </div>
    );
  }
}

export default Home;

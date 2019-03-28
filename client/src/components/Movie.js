import React, { Component } from "react";

class Movie extends Component {
  state = {};
  render() {
    return <div>{this.props.movie}</div>;
  }
}

export default Movie;

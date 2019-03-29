import React, { Component } from "react";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIdentifier: ""
    };
  }

  componentDidMount() {
    const { itemIdentifier } = this.props.location.state;
    console.log("this should be itemIdentifier", itemIdentifier);
    this.setState({ itemIdentifier: itemIdentifier });
  }
  render() {
    return (
      <div>
        I am the detail page<div>{this.state.itemIdentifier}</div>
      </div>
    );
  }
}

export default DetailPage;

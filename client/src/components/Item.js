import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Item extends Component {
  state = {};
  render() {
    const itemIdentifier = this.props.item;
    return (
      <div>
        {this.props.item}
        <NavLink
          to={{
            pathname: "/detailPage",
            state: { itemIdentifier: itemIdentifier }
          }}
        >
          View More
        </NavLink>
      </div>
    );
  }
}

export default Item;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class PeopleItem extends Component {
  state = {};
  render() {
    const itemIdentifier = this.props.item;
    return (
      <div>
        <div className="itemCard">
          <span className="itemCardTtitle">{this.props.itemName}</span>
          <img
            alt="movie poster"
            src={"https://image.tmdb.org/t/p/w185" + this.props.itemProfilePath}
          />
          <NavLink
            to={{
              pathname: "/detailPage",
              state: { itemIdentifier: itemIdentifier }
            }}
          >
            <div className="movieCardVieMore">
              <Button outline color="primary">
                {" "}
                View More
              </Button>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default PeopleItem;

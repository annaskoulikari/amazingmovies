import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class TvItem extends Component {
  state = {};
  render() {
    const { itemPosterPath, itemName, itemOverview } = this.props;

    const tv = {
      itemPosterPath,
      itemName,
      itemOverview
    };

    return (
      <div>
        <div className="itemCard">
          <span className="itemCardTitle">{this.props.itemName}</span>
          <img
            alt="movie poster"
            src={"https://image.tmdb.org/t/p/w185" + this.props.itemPosterPath}
          />
          <NavLink
            to={{
              pathname: "/detailPage",
              state: { itemIdentifier: "tv", tv: tv }
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

export default TvItem;

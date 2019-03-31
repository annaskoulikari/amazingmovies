import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

class PeopleItem extends Component {
  state = {};
  render() {
    const { itemProfilePath, itemName, itemKnownForDepartment } = this.props;

    const person = {
      itemProfilePath,
      itemName,
      itemKnownForDepartment
    };

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
              state: { itemIdentifier: "people", person: person }
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

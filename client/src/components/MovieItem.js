import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFavourite } from "../actions/favouriteActions";

class MovieItem extends Component {
  state = {};

  addToFavourites = (e, movie) => {
    e.persist();

    this.props.addFavourite(movie);
  };

  deleteFromFavourites = (e, movie) => {
    e.persist();

    this.props.deleteFavourite(movie);
  };

  render() {
    const itemIdentifier = this.props.item;
    const user = this.props.auth.user.id;

    console.log("is this user id", user);
    const {
      itemID,
      itemBackdropPath,
      itemTitle,
      itemOverview,
      itemReleaseDate
    } = this.props;

    const movie = {
      itemID,
      itemBackdropPath,
      itemTitle,
      itemOverview,
      itemReleaseDate,
      user
    };
    // console.log("lets see if destructuring worked", itemID);

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
        <button onClick={e => this.addToFavourites(e, movie)}>
          Add Movie to Favourites
        </button>
        <button onClick={e => this.deleteFromFavourites(e, movie)}>
          Delete Movie from Favourites
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   favourites: state.favourites.favourites
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addFavourite }
)(MovieItem);

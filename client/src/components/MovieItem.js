import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFavourite, deleteFavourite } from "../actions/favouriteActions";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInFavourite: false
    };
  }

  componentDidMount() {
    this.setState({ isInFavourite: this.props.isInFavourite });
  }

  addToFavourites = (e, movie) => {
    e.persist();
    const user = this.props.auth.user.id;
    this.props.addFavourite(movie, user);
  };

  deleteFromFavourites = (e, itemID) => {
    e.persist();
    const user = this.props.auth.user.id;
    this.props.deleteFavourite(itemID, user);
  };

  render() {
    const itemIdentifier = this.props.item;

    // const user = this.props.auth.user.id;

    // console.log("is this user id", user);
    const {
      itemID,
      itemPosterPath,
      itemTitle,
      itemOverview,
      itemReleaseDate
    } = this.props;

    const movie = {
      itemID,
      itemPosterPath,
      itemTitle,
      itemOverview,
      itemReleaseDate
      //   user
    };
    // console.log("lets see if destructuring worked", itemID);

    const _idItem = this.props.itemUnderscoreID;

    console.log("is this underscore", _idItem);

    return (
      <div>
        {this.props.itemTitle}
        <img
          src={"https://image.tmdb.org/t/p/w185" + this.props.itemPosterPath}
        />
        <NavLink
          to={{
            pathname: "/detailPage",
            state: { itemIdentifier: itemIdentifier }
          }}
        >
          View More
        </NavLink>
        {this.state.isInFavourite ? (
          <button onClick={e => this.deleteFromFavourites(e, _idItem)}>
            Delete Movie from Favourites
          </button>
        ) : (
          <button onClick={e => this.addToFavourites(e, movie)}>
            Add Movie to Favourites
          </button>
        )}
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
  { addFavourite, deleteFavourite }
)(MovieItem);

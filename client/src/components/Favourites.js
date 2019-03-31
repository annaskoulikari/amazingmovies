import React, { Component } from "react";
import { getFavourites } from "../actions/favouriteActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

class Favourites extends Component {
  componentDidMount() {
    const user = this.props.auth.user.id;

    this.props.getFavourites(user);
  }
  state = {};
  render() {
    return (
      <div>
        <div className="wrapContainer">
          {this.props.favourites.map(item => (
            <MovieItem
              key={item.overview}
              itemTitle={item.title}
              itemID={item.id}
              itemOverview={item.overview}
              itemReleaseDate={item.release_date}
              itemPosterPath={item.poster_path}
              itemUnderscoreID={item._id}
              isInFavourite={true}
            />
          ))}
        </div>
      </div>
    );
  }
}

Favourites.propTypes = {
  getFavourites: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  favourites: state.favourites.favourites
});

export default connect(
  mapStateToProps,
  { getFavourites }
)(Favourites);

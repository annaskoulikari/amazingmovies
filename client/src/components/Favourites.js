import React, { Component } from "react";
import { getFavourites } from "../actions/favouriteActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

class Favourites extends Component {
  componentDidMount() {
    console.log("these are the props", this.props);
    const user = this.props.auth.user.id;
    this.props.getFavourites(user);
  }
  state = {};
  render() {
    return (
      <div>
        {this.props.auth.user.favourites.map(item => (
          <MovieItem
            key={item.original_title}
            itemTitle={item.title}
            itemID={item.id}
            itemOverview={item.overview}
            itemReleaseDate={item.release_date}
            itemBackdropPath={item.backdrop_path}
          />
        ))}
      </div>
    );
  }
}

Favourites.propTypes = {
  // getMovies: PropTypes.func.isRequired
  // movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getFavourites }
)(Favourites);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchMovies } from "../actions/movieActions";
import MovieItem from "./MovieItem";

import { DebounceInput } from "react-debounce-input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
    this.performSearch();
  }

  performSearch() {
    const searchTerm = this.state.search;
    this.props.searchMovies(searchTerm);
  }

  render() {
    return (
      <div>
        <div className="searchContainer">
          <span className="searchText">Search For Any Movie You Want!</span>

          <DebounceInput
            className="searchInput"
            type="text"
            debounceTimeout={500}
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>
        {this.state.search.length > 0 ? (
          <div className="wrapContainer">
            {" "}
            {this.props.moviesSearch.map(item => (
              <MovieItem
                key={item.id}
                itemTitle={item.title}
                itemID={item.id}
                itemOverview={item.overview}
                itemReleaseDate={item.release_date}
                itemPosterPath={item.poster_path}
                isInFavourite={false}
              />
            ))}
          </div>
        ) : (
          <div className="searchPlaceholder">
            <FontAwesomeIcon style={{ fontSize: 200 }} icon="film" />
          </div>
        )}
      </div>
    );
  }
}

SearchMovies.propTypes = {
  searchMovies: PropTypes.func.isRequired,
  moviesSearch: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  moviesSearch: state.moviesSearch.moviesSearch
});

export default connect(
  mapStateToProps,
  { searchMovies }
)(SearchMovies);

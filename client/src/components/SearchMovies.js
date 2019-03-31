import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchMovies } from "../actions/movieActions";
import Item from "./Item";

import { DebounceInput } from "react-debounce-input";

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
    console.log("search is being performed");
  }

  render() {
    console.log("this.props is", this.props);
    return (
      <div>
        Search movies!
        <DebounceInput
          type="text"
          debounceTimeout={500}
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        {this.state.search.length > 0 ? (
          this.props.moviesSearch.map(movie => (
            <Item key={movie.id} item={movie.original_title} />
          ))
        ) : (
          <div>Search for your favourite movie!</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  moviesSearch: state.moviesSearch.moviesSearch
});

export default connect(
  mapStateToProps,
  { searchMovies }
)(SearchMovies);

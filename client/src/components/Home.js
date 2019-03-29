import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import Movie from "./Item";

import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import { getPeople } from "../actions/peopleActions";
import { getTv } from "../actions/tvActions";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.props.getMovies();
    this.props.getPeople();
    this.props.getTv();
  }

  render() {
    // console.log(this.state);
    // console.log("this.props is", this.props);
    return (
      <div>
        <div>this is homepage</div>
        <NavLink
          to={{ pathname: "/listPage", state: { identifier: "movies" } }}
        >
          Movies
        </NavLink>
        <NavLink to={{ pathname: "/listPage", state: { identifier: "tv" } }}>
          TV
        </NavLink>
        <NavLink
          to={{ pathname: "/listPage", state: { identifier: "people" } }}
        >
          People
        </NavLink>
      </div>
    );
  }
}

Home.propTypes = {
  // getMovies: PropTypes.func.isRequired
  // movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  people: state.people.people,
  tv: state.tv.tv
});

export default connect(
  mapStateToProps,
  { getMovies, getPeople, getTv }
)(Home);

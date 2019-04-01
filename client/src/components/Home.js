import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import { getPeople } from "../actions/peopleActions";
import { getTv } from "../actions/tvActions";
import { Button } from "reactstrap";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMovies();
    this.props.getPeople();
    this.props.getTv();
  }

  render() {
    return (
      <div>
        <div className="homePageTitle">Check Out What Is Trending In :</div>
        <div className="categoryOptions">
          <div className="categorySelection">
            <NavLink
              className="category"
              style={{ width: "100%", height: "100%" }}
              to={{ pathname: "/listPage", state: { identifier: "movies" } }}
            >
              <FontAwesomeIcon className="categoryIcon" icon="film" />
              <span className="categoryTitle">Movies</span>
            </NavLink>
          </div>
          <div className="categorySelection">
            <NavLink
              className="category"
              style={{ width: "100%", height: "100%" }}
              to={{ pathname: "/listPage", state: { identifier: "tv" } }}
            >
              <FontAwesomeIcon className="categoryIcon" icon="tv" />
              <span className="categoryTitle">TV</span>
            </NavLink>
          </div>
          <div className="categorySelection">
            <NavLink
              className="category"
              style={{ width: "100%", height: "100%" }}
              to={{ pathname: "/listPage", state: { identifier: "people" } }}
            >
              <FontAwesomeIcon className="categoryIcon" icon="users" />
              <span className="categoryTitle">People</span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getPeople: PropTypes.func.isRequired,
  getTv: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  tv: PropTypes.array.isRequired
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

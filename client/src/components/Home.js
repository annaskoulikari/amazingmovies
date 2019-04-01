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
      <div className="categoryOptions">
        <NavLink
          to={{ pathname: "/listPage", state: { identifier: "movies" } }}
        >
          <Button outline>
            <div className="category">
              <FontAwesomeIcon style={{ fontSize: 70 }} icon="film" />
              <span style={{ fontSize: 40 }}>Movies</span>
            </div>
          </Button>
        </NavLink>
        <NavLink to={{ pathname: "/listPage", state: { identifier: "tv" } }}>
          <Button outline>
            <div className="category">
              <FontAwesomeIcon style={{ fontSize: 70 }} icon="tv" />
              <span style={{ fontSize: 40 }}>TV</span>
            </div>
          </Button>
        </NavLink>
        <NavLink
          to={{ pathname: "/listPage", state: { identifier: "people" } }}
        >
          <Button outline>
            <div className="category">
              <FontAwesomeIcon style={{ fontSize: 70 }} icon="users" />
              <span style={{ fontSize: 40 }}>People</span>
            </div>
          </Button>
        </NavLink>
      </div>
    );
  }
}

Home.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getPeople: PropTypes.func.isRequired,
  getTv: PropTypes.func.isRequired
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

import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";

import Movie from "./Item";

import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import { getPeople } from "../actions/peopleActions";
import { getTv } from "../actions/tvActions";
import { logIn } from "../actions/loginActions";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      toLogin: false
    };
  }

  componentDidMount() {
    this.setState({ toLogin: false });
    this.props.getMovies();
    this.props.getPeople();
    this.props.getTv();
  }

  sessionStart() {
    let requestToken = sessionStorage.getItem("requestToken");
    axios
      .get(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=943d003becc08df50bf054b11efaccb1",
        { request_token: requestToken }
      )
      .then(res => console.log("this is response from sessionstart", res));
  }

  logIn() {
    this.props.logIn();
    this.setState({ toLogin: true });
  }

  render() {
    // if (this.state.toLogin === true) {
    //   return <Redirect to="/login" />;
    // }

    let requestToken = sessionStorage.getItem("requestToken");
    console.log("this is requestToken", requestToken);

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
        <button onClick={this.logIn.bind(this)}>log in</button>
        <NavLink to="/login">second step</NavLink>
        <button onClick={this.sessionStart.bind(this)}>Start session</button>
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
  { getMovies, getPeople, getTv, logIn }
)(Home);

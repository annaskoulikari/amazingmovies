import React, { Component } from "react";
import axios from "axios";

import Movie from "./Movie";

import { connect } from "react-redux";
import { getMovies } from "../actions/movieActions";
import PropTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/trending/movie/week?api_key=943d003becc08df50bf054b11efaccb1"
    //   )
    //   .then(res => {
    //     console.log("this is response", res);
    //     this.setState({ movies: res.data.results });
    //   });
    this.props.getMovies();
  }

  render() {
    console.log(this.state);
    console.log("this.props is", this.props);
    return (
      <div>
        <div>this is homepage</div>
        <div>
          {this.props.movies.map(movie => (
            <Movie key={movie.original_title} movie={movie.original_title} />
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getMovies: PropTypes.func.isRequired
  // movies: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(Home);

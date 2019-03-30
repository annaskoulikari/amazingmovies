import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Item from "./Item";
import MovieItem from "./MovieItem";

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: ""
    };
  }

  componentDidMount() {
    const { identifier } = this.props.location.state;
    console.log("this should be identifier", identifier);
    this.setState({ identifier: identifier });
  }
  render() {
    // const {
    //   id,
    //   backdrop_path,
    //   original_title,
    //   overview,
    //   release_date
    // } = this.props.movies;
    // console.log("let's see if destructuring worked", original_title);

    return (
      <div>
        I am the listpage{" "}
        <div>
          {this.state.identifier === "tv"
            ? this.props.tv.map(item => (
                <Item key={item.original_name} item={item.original_name} />
              ))
            : this.state.identifier === "people"
            ? this.props.people.map(item => (
                <Item key={item.original_title} item={item.original_title} />
              ))
            : this.props.movies.map(item => (
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  people: state.people.people,
  tv: state.tv.tv
});

export default connect(mapStateToProps)(ListPage);

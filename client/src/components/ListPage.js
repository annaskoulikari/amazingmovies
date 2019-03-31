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

    this.setState({ identifier: identifier });
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
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
                  key={item.backdrop_path}
                  itemTitle={item.title}
                  itemID={item.id}
                  itemOverview={item.overview}
                  itemReleaseDate={item.release_date}
                  itemPosterPath={item.poster_path}
                  isInFavourite={false}
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

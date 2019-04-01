import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PeopleItem from "./PeopleItem";
import TvItem from "./TvItem";
import MovieItem from "./MovieItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBrowserHistory } from "history";

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
    const history = createBrowserHistory();
    return (
      <div>
        <div>
          <FontAwesomeIcon
            onClick={() => {
              history.goBack();
            }}
            role="button"
            className="previousPage"
            icon="arrow-left"
          />
        </div>
        <div className="wrapContainer">
          {this.state.identifier === "tv"
            ? this.props.tv.map(item => (
                <TvItem
                  key={item.original_name}
                  itemName={item.name}
                  itemOverview={item.overview}
                  itemPosterPath={item.poster_path}
                />
              ))
            : this.state.identifier === "people"
            ? this.props.people.map(item => (
                <PeopleItem
                  key={item.id}
                  itemName={item.name}
                  itemProfilePath={item.profile_path}
                  itemKnownForDepartment={item.known_for_department}
                />
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

ListPage.propTypes = {
  movies: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  tv: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  people: state.people.people,
  tv: state.tv.tv
});

export default connect(mapStateToProps)(ListPage);

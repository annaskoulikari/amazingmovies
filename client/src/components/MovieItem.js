import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFavourite, deleteFavourite } from "../actions/favouriteActions";
import { Button, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInFavourite: false,
      isLoggedIn: false,
      alreadyFavourited: false
    };
  }

  componentDidMount() {
    this.setState({ isInFavourite: this.props.isInFavourite });
    if (this.props.auth.isAuthenticated) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }

    const alreadyFavourited = this.props.favourites.find(
      movie => movie.id === this.props.itemID
    );

    if (alreadyFavourited) {
      this.setState({ alreadyFavourited: true });
    } else {
      this.setState({ alreadyFavourited: false });
    }
  }

  addToFavourites = (e, movie) => {
    e.persist();
    const user = this.props.auth.user.id;
    this.props.addFavourite(movie, user);
    this.setState({ alreadyFavourited: true });
  };

  deleteFromFavourites = (e, itemID) => {
    e.persist();
    const user = this.props.auth.user.id;
    this.props.deleteFavourite(itemID, user);
  };

  render() {
    const {
      itemID,
      itemPosterPath,
      itemTitle,
      itemOverview,
      itemReleaseDate
    } = this.props;

    const movie = {
      itemID,
      itemPosterPath,
      itemTitle,
      itemOverview,
      itemReleaseDate
    };

    const _idItem = this.props.itemUnderscoreID;

    return (
      <div>
        <div className="itemCard">
          <span className="itemCardTitle">{this.props.itemTitle}</span>
          <img
            alt="movie poster"
            src={"https://image.tmdb.org/t/p/w185" + this.props.itemPosterPath}
          />
          <div className="movieCardActions">
            <NavLink
              to={{
                pathname: "/detailPage",
                state: { itemIdentifier: "movie", movie: movie }
              }}
            >
              <div className="movieCardVieMore">
                <Button outline color="primary">
                  {" "}
                  View More
                </Button>
              </div>
            </NavLink>

            {!this.state.isInFavourite &&
            this.state.isLoggedIn &&
            this.state.alreadyFavourited ? (
              <div className="movieCardFavouriteAction">
                <Badge
                  style={{
                    fontSize: "1rem",
                    height: "100%",
                    display: "flex",
                    alignItems: "center"
                  }}
                  color="danger"
                >
                  Favourited
                  <FontAwesomeIcon style={{ marginLeft: 5 }} icon="heart" />
                </Badge>{" "}
              </div>
            ) : !this.state.isInFavourite && this.state.isLoggedIn ? (
              <div className="movieCardFavouriteAction">
                <Button
                  outline
                  color="danger"
                  onClick={e => this.addToFavourites(e, movie)}
                >
                  Add to Favourites
                </Button>
              </div>
            ) : !this.state.isInFavourite ? (
              <div className="movieCardFavouriteAction">
                <Button disabled outline color="danger">
                  Add to Favourites
                </Button>
              </div>
            ) : (
              <div className="movieCardFavouriteAction">
                {" "}
                <Button
                  outline
                  color="danger"
                  onClick={e => this.deleteFromFavourites(e, _idItem)}
                >
                  Delete from Favourites
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  addFavourite: PropTypes.func.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  isInFavourite: PropTypes.bool.isRequired,
  itemID: PropTypes.number.isRequired,
  itemOverview: PropTypes.string.isRequired,
  itemPosterPath: PropTypes.string,
  itemReleaseDate: PropTypes.string.isRequired,
  itemTitle: PropTypes.string.isRequired,
  favourites: PropTypes.array.isRequired
  // movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  // movies: state.movies.movies,
  favourites: state.favourites.favourites
});

export default connect(
  mapStateToProps,
  { addFavourite, deleteFavourite }
)(MovieItem);

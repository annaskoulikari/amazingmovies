import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFavourite, deleteFavourite } from "../actions/favouriteActions";
import { Button } from "reactstrap";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInFavourite: false,
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.setState({ isInFavourite: this.props.isInFavourite });
    if (this.props.auth.isAuthenticated) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }

  addToFavourites = (e, movie) => {
    e.persist();
    const user = this.props.auth.user.id;
    this.props.addFavourite(movie, user);
  };

  deleteFromFavourites = (e, itemID) => {
    e.persist();
    const user = this.props.auth.user.id;
    this.props.deleteFavourite(itemID, user);
  };

  render() {
    const itemIdentifier = this.props.item;

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

    console.log("is this underscore", _idItem);

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

            {!this.state.isInFavourite && this.state.isLoggedIn ? (
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
                <Button
                  disabled
                  outline
                  color="danger"
                  onClick={e => this.addToFavourites(e, movie)}
                >
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addFavourite, deleteFavourite }
)(MovieItem);

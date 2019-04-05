import React, { Component } from "react";
import { Button, Badge } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addFavourite } from "../actions/favouriteActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBrowserHistory } from "history";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      itemIdentifier: "",
      item: {},
      alreadyFavourited: false
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ isLoggedIn: false });
    }
    const { itemIdentifier } = this.props.location.state;

    this.setState({ itemIdentifier: itemIdentifier });

    if (this.props.location.state.itemIdentifier === "tv") {
      this.setState({ item: this.props.location.state.tv });
    }
    if (this.props.location.state.itemIdentifier === "people") {
      this.setState({ item: this.props.location.state.person });
    }
    if (this.props.location.state.itemIdentifier === "movie") {
      const alreadyFavourited = this.props.favourites.find(
        movie => movie.id === this.props.location.state.movie.itemID
      );

      if (alreadyFavourited) {
        this.setState({ alreadyFavourited: true });
      } else {
        this.setState({ alreadyFavourited: false });
      }

      this.setState({ item: this.props.location.state.movie });
    }
  }

  addToFavourites = e => {
    e.persist();
    const movie = this.state.item;

    const user = this.props.auth.user.id;
    this.props.addFavourite(movie, user);
  };

  render() {
    const history = createBrowserHistory();
    return (
      <div>
        {this.state.itemIdentifier === "tv" ? (
          <div className="detailPageContainer">
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
            <div className="detailPageTitleContainer">
              <div className="detailPageTitle">{this.state.item.itemName}</div>
            </div>
            <div className="detailPageContentContainer">
              <div className="detailPageImage">
                <img
                  alt="movie poster"
                  src={
                    "https://image.tmdb.org/t/p/w185" +
                    this.state.item.itemPosterPath
                  }
                />
              </div>
              <div className="detailPageOverview">
                {this.state.item.itemOverview}
              </div>
            </div>
          </div>
        ) : this.state.itemIdentifier === "people" ? (
          <div className="detailPageContainer">
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
            <div className="detailPageTitleContainer">
              <div className="detailPageTitle">{this.state.item.itemName}</div>
            </div>
            <div className="detailPageContentContainer">
              <div className="detailPageImage">
                <img
                  alt="movie poster"
                  src={
                    "https://image.tmdb.org/t/p/w185" +
                    this.state.item.itemProfilePath
                  }
                />
              </div>
              <div className="detailPageOverview">
                {this.state.item.itemKnownForDepartment}
              </div>
            </div>
          </div>
        ) : (
          <div className="detailPageContainer">
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
            <div className="detailPageTitleContainer">
              <div className="detailPageTitle">{this.state.item.itemTitle}</div>
            </div>
            <div className="detailPageContentContainer">
              <div className="detailPageImage">
                <img
                  alt="movie poster"
                  src={
                    "https://image.tmdb.org/t/p/w185" +
                    this.state.item.itemPosterPath
                  }
                />
              </div>
              <div className="detailPageOverview">
                {this.state.item.itemOverview}
                <div className="detailPageAddFavourite">
                  {this.state.isLoggedIn && this.state.alreadyFavourited ? (
                    <div>
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
                        <FontAwesomeIcon
                          style={{ marginLeft: 5 }}
                          icon="heart"
                        />
                      </Badge>{" "}
                    </div>
                  ) : this.state.isLoggedIn ? (
                    <Button
                      outline
                      color="danger"
                      onClick={e => this.addToFavourites(e)}
                    >
                      Add to Favourites
                    </Button>
                  ) : (
                    <Button disabled outline color="danger">
                      Add to Favourites
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

DetailPage.propTypes = {
  addFavourite: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  favourites: PropTypes.array
};

const mapStateToProps = state => ({
  auth: state.auth,
  favourites: state.favourites.favourites
});

export default connect(
  mapStateToProps,
  { addFavourite }
)(DetailPage);

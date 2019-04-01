import React, { Component } from "react";
import { Button } from "reactstrap";
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
      item: {}
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
                  {this.state.isLoggedIn ? (
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addFavourite }
)(DetailPage);

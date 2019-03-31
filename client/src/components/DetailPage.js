import React, { Component } from "react";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemIdentifier: "",
      item: {}
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <div>
        {this.state.itemIdentifier === "tv" ? (
          <div className="detailPageContainer">
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
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DetailPage;

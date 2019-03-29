import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Item from "./Item";

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
                <Item key={item.original_title} item={item.original_title} />
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

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/searchMovies">Search Any Movie!</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>

        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/searchMovies">Search Any Movie!</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register </NavLink>
      </Fragment>
    );

    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Header);

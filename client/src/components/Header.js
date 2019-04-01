import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";
import { Navbar, NavbarBrand } from "reactstrap";

import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/searchMovies">
          Search Any Movie!
        </NavLink>
        <NavLink className="navLink" to="/favourites">
          Favourites
        </NavLink>

        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>

        <NavLink className="navLink" to="/searchMovies">
          Search Any Movie!
        </NavLink>
        <NavLink className="navLink" to="/login">
          Login
        </NavLink>
        <NavLink className="navLink" to="/register">
          Register{" "}
        </NavLink>
      </Fragment>
    );

    return (
      <div>
        <Navbar className="navBar">
          <NavbarBrand style={{ color: "#01D572" }}>Amazing Movies</NavbarBrand>
          {isAuthenticated ? authLinks : guestLinks}
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Header);

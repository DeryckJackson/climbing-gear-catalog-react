import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { RootReducerState } from "../../reducers/reducer.types";
import { User } from "../../actions/actions.types";

type HeaderProps = {
  logout: (token: string) => void,
  isAuthenticated: boolean,
  token: string,
  user: User | null,
};

const Header = ({ logout, isAuthenticated, token, user }: HeaderProps) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <span className="navbar-text text-light mr-3">
        <strong>
          {user ? `Welcome ${user.username[0].toUpperCase() +
          user.username.slice(1)}` : ""}
        </strong>
      </span>
      <li className="nav-item">
        <button
          onClick={() => logout(token)}
          className="nav-link btn btn-info btn-sm text-light"
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Gear Catalog
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

type MapStateToProps = {
  isAuthenticated: boolean,
  token: string | null,
  user: User | null,
};

export const mapStateToProps = (state: RootReducerState): MapStateToProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Header);

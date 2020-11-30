import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { RootReducerState } from "../../reducers/reducer.types";

type LoginProps = {
  isAuthenticated: boolean,
  login: (username: string, password: string) => void,
};

const Login = ({ isAuthenticated, login }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const onChange = (e) => {
    if (e.target.name == 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don&apo;t have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
  );
};

const mapStateToProps = (state: RootReducerState) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
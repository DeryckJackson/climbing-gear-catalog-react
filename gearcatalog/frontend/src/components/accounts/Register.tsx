import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { RootReducerState } from "../../reducers/reducer.types";

type RegisterProps = {
  register: (user: User) => void,
  createMessage: ({passwordNotMatch: string}) => void,
  isAuthenticated: boolean,
};

type User = {
  username: string,
  password: string,
  email: string,
};

const Register = ({register, createMessage, isAuthenticated}: RegisterProps) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      register(newUser);
    }
  };

  const onChange = (e) => {
    if (e.target.name == 'username') {
      setUsername(e.target.value);
    } else if (e.target.name == 'email') {
      setEmail(e.target.value);
    } else if (e.target.name == 'password') {
      setPassword(e.target.value);
    } else {
      setPassword2(e.target.value);
    }
  };

  if (isAuthenticated) {
    history.push('/');
  }

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
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
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={onChange}
              value={email}
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
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={onChange}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};


const mapStateToProps = (state: RootReducerState) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
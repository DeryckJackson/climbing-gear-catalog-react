import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import "./App.css";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Footer from "./layout/Footer";

import Login from "./accounts/Login";
import Register from "./accounts/Register";

import PrivateRoute from "./common/PrivateRoute";

import Form from "./gear/Form";
import GearDetail from "./gear/GearDetail";
import EditGearForm from "./gear/EditGearForm";
import Dashboard from "./gear/Dashboard";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
  transition: "scale",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute exact path="/addgear" component={Form} />
                  <PrivateRoute path="/gear/:id" component={GearDetail} />
                  <PrivateRoute path="/editgear/:id" component={EditGearForm} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

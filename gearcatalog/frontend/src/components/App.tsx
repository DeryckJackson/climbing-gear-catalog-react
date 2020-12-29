import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";

import Login from "./accounts/Login";
import Register from "./accounts/Register";

import PrivateRoute from "./common/PrivateRoute";

import Dashboard from "./gear/Dashboard";
import Form from "./gear/Form";
import EditGearForm from "./gear/EditGearForm";
import GearDetail from "./gear/GearDetail";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

class App extends Component {
  componentDidMount(): void {
    store.dispatch(loadUser(store.getState().auth.token));
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <AlertProvider
          template={AlertTemplate}
          timeout={3000}
          transition={"scale"}
          position={"top center"}
        >
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
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

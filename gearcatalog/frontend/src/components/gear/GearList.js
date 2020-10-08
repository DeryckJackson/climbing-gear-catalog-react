import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { redirect as redirectLink } from "../../actions/redirect";
import PropTypes from "prop-types";
import { getGear, deleteGear } from "../../actions/gear-list";
import { Link, withRouter } from "react-router-dom";
import LinkButton from "../layout/LinkButton";

export class GearList extends Component {
  static propTypes = {
    gearList: PropTypes.array.isRequired,
    getGear: PropTypes.func,
    deleteGear: PropTypes.func,
  };

  componentDidMount() {
    this.props.getGear();
    this.props.redirectLink(null);
  }

  render() {
    if (this.props.gearList.length == 0) {
      return (
        <Fragment>
          <div className="card card-body justify-content-center rounded shadow mt-2">
            <h2 className="mt-1">Gear List</h2>
            <p>No gear yet.</p>
            <Link to="/addgear">
              <button className="btn btn-primary mt-4 shadow rounded">
                Add Gear
              </button>
            </Link>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="card rounded shadow mt-2">
          <div className="card-body">
            <h2 className="mt-1">Gear List</h2>
            {this.props.gearList.map((gear) => (
              <div
                className="card border-primary d-inline-flex m-2 rounded shadow"
                key={gear.id}
                style={{ width: "15rem" }}
              >
                <div className="card-header">
                  <strong>{gear.name}</strong>
                </div>
                <div className="card-body">
                  <p className="card-text">Brand: {gear.brand} </p>
                  <hr />
                  <Link
                    to={"gear/" + gear.id}
                    className="btn-primary btn-sm btn mr-1 rounded"
                  >
                    View
                  </Link>
                  <button
                    onClick={this.props.deleteGear.bind(this, gear.id)}
                    className="btn-danger btn btn-sm float-right rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <br />
            <div>
              <LinkButton
                to="/addgear"
                className="btn btn-primary rounded mt-4"
              >
                Add Gear
              </LinkButton>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gearList: state.gearList.gearList,
    redirect: state.redirect.redirect,
  };
};

export default connect(mapStateToProps, { getGear, deleteGear, redirectLink })(
  GearList
);

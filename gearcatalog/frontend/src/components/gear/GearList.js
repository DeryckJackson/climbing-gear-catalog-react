import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGear, deleteGear } from "../../actions/gear-list";
import { Link, withRouter } from "react-router-dom";

export class GearList extends Component {
  static propTypes = {
    gearList: PropTypes.array.isRequired,
    getGear: PropTypes.func,
    deleteGear: PropTypes.func,
  };

  componentDidMount() {
    this.props.getGear();
  }

  render() {
    return (
      <Fragment>
        <h2 className="mt-4">Gear List</h2>
        {this.props.gearList.map((gear) => (
          <div
            className="card border-primary d-inline-flex m-2 rounded shadow"
            key={gear.id}
            style={{ width: "16rem" }}
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
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gearList: state.gearList.gearList,
  };
};

export default connect(mapStateToProps, { getGear, deleteGear })(GearList);

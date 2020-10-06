import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGear, deleteGear } from "../../actions/gear-list";

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
            className="card d-inline-flex m-2 rounded shadow"
            key={gear.id}
            style={{ width: "15rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{gear.name}</h5>
              <p className="card-text">Brand: {gear.brand} </p>
              <button
                onClick={this.props.deleteGear.bind(this, gear.id)}
                className="btn-danger btn btn-sm"
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

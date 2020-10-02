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
        <h2>Gear List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Weight Grams</th>
              <th>Length MM</th>
              <th>Width MM</th>
              <th>Depth MM</th>
              <th>Locking</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.gearList.map((gear) => (
              <tr key={gear.id}>
                <td>{gear.name}</td>
                <td>{gear.brand}</td>
                <td>{gear.weight_grams}</td>
                <td>{gear.length_mm}</td>
                <td>{gear.width_mm}</td>
                <td>{gear.depth_mm}</td>
                <td>{gear.locking}</td>
                <td>
                  <button
                    onClick={this.props.deleteGear.bind(this, gear.id)}
                    className="btn-danger btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

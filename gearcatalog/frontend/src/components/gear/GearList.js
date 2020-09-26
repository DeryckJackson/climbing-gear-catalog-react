import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGear } from "../../actions/gear-list";

export class GearList extends Component {
  static propTypes = {
    gear: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Gear List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gearList: state.gearList.gearList,
});

export default connect(mapStateToProps)(GearList);

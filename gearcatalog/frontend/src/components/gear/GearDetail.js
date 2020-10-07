import React, { Component, Fragment } from "react";
import { selectGear, deleteGear } from "../../actions/gear-list";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

export class GearDetail extends Component {
  static propTypes = {
    selectedGear: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.selectGear(params.id);
  }

  render() {
    const {
      id,
      name,
      desc,
      brand,
      weight_grams,
      length_mm,
      width_mm,
      depth_mm,
      locking,
    } = this.props.selectedGear;

    if (this.props.redirect) {
      return <Redirect to={this.props.redirect} />;
    }

    return (
      <Fragment>
        <h2 className="my-4">Gear Detail</h2>
        <div
          className="card border-primary rounded shadow mb-3"
          style={{ width: "30rem" }}
          key={id}
        >
          <div className="card-header">
            <strong>{name}</strong>
          </div>
          <div className="card-body">
            <p className="card-text">
              Description: <br />
              {desc}
            </p>
            <hr />
            <p className="card-text">Brand: {brand}</p>
            <hr />
            <p className="card-text">Weight: {weight_grams} g</p>
            <hr />
            <p className="card-text">Length: {length_mm} mm</p>
            <hr />
            <p className="card-text">Width: {width_mm} mm</p>
            <hr />
            <p className="card-text">Depth: {depth_mm} mm</p>
            <hr />
            <p className="card-text">Locking: {locking ? "Yes" : "No"}</p>
            <hr />
            <Link to={"/editgear/" + id} className="btn btn-info rounded">
              Edit
            </Link>
            <button
              onClick={this.props.deleteGear.bind(this, id)}
              className="btn-danger btn float-right rounded"
            >
              Delete
            </button>
          </div>
        </div>
        <Link to="/" className="btn btn-primary mt-2 shadow rounded">
          Home
        </Link>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGear: state.gearList.selectedGear,
    redirect: state.redirect.redirect,
  };
};

export default connect(mapStateToProps, { selectGear, deleteGear })(GearDetail);

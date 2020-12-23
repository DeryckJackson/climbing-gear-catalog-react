import React, { Component, Fragment } from "react";
import { selectGear, deleteGear } from "../../actions/gear-list";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LinkButton from "../layout/LinkButton";

export class GearDetail extends Component {
  static propTypes = {
    selectedGear: PropTypes.object.isRequired,
    token: PropTypes.string
  };

  componentDidMount() {
    const {
      match: { params },
      token,
      selectGear,
    } = this.props;
    selectGear(params.id, token);
  }

  render() {
    const { token, deleteGear } = this.props;
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

    return (
      <Fragment>
        <div className="card card-body justify-content-center rounded
        shadow mt-2">
          <h2 className="my-2">Gear Detail</h2>
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
                onClick={() => deleteGear(id, token)}
                className="btn-danger btn float-right rounded"
              >
                Delete
              </button>
            </div>
          </div>
          <div>
            <LinkButton to="/" className="btn btn-primary rounded">
              Home
            </LinkButton>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGear: state.gearList.selectedGear,
    token: state.auth.token
  };
};

export default connect(mapStateToProps, { selectGear, deleteGear })(GearDetail);

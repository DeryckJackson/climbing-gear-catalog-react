import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editGear, selectGear } from "../../actions/gear-list";
import { Link, Redirect } from "react-router-dom";

export class Form extends Component {
  state = {
    name: this.props.selectedGear.name,
    desc: this.props.selectedGear.desc,
    brand: this.props.selectedGear.brand,
    weight_grams: this.props.selectedGear.weight_grams,
    length_mm: this.props.selectedGear.length_mm,
    width_mm: this.props.selectedGear.width_mm,
    depth_mm: this.props.selectedGear.depth_mm,
    locking: this.props.selectedGear.locking,
  };

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.selectGear(params.id);
  }

  static propTypes = {
    editGear: PropTypes.func.isRequired,
    selectedGear: PropTypes.object.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      desc,
      brand,
      weight_grams,
      length_mm,
      width_mm,
      depth_mm,
      locking,
    } = this.state;
    const gear = {
      id: this.props.selectedGear.id,
      name,
      desc,
      brand,
      weight_grams,
      length_mm,
      width_mm,
      depth_mm,
      locking,
    };
    this.props.editGear(gear);
    this.setState({
      name: "",
      desc: "",
      brand: "",
      weight_grams: 0,
      length_mm: 0,
      width_mm: 0,
      depth_mm: 0,
      locking: "false",
    });
  };

  render() {
    const {
      name,
      desc,
      brand,
      weight_grams,
      length_mm,
      depth_mm,
      width_mm,
      locking,
    } = this.state;

    if (this.props.redirect) {
      return <Redirect to={this.props.redirect} />;
    }

    return (
      <div className="card card-body shadow mt-4 mb-4 pb-1">
        <h2>Edit Gear</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="desc"
              onChange={this.onChange}
              value={desc}
            />
          </div>
          <div className="form-group">
            <label>Brand</label>
            <input
              className="form-control"
              type="text"
              name="brand"
              onChange={this.onChange}
              value={brand}
            />
          </div>
          <div className="form-group">
            <label>Weight Grams</label>
            <input
              className="form-control"
              type="number"
              step="1"
              name="weight_grams"
              onChange={this.onChange}
              value={weight_grams}
            />
          </div>
          <div className="form-group">
            <label>Length MM</label>
            <input
              className="form-control"
              type="number"
              step="1"
              name="length_mm"
              onChange={this.onChange}
              value={length_mm}
            />
          </div>
          <div className="form-group">
            <label>Width MM</label>
            <input
              className="form-control"
              type="number"
              step="1"
              name="width_mm"
              onChange={this.onChange}
              value={width_mm}
            />
          </div>
          <div className="form-group">
            <label>Depth MM</label>
            <input
              className="form-control"
              type="number"
              step="1"
              name="depth_mm"
              onChange={this.onChange}
              value={depth_mm}
            />
          </div>
          <div className="form-group">
            <label>Locking</label>
            <select
              className="form-control"
              type="text"
              name="locking"
              onChange={this.onChange}
              value={locking}
            >
              <option value="false" defaultValue>
                No
              </option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success mb-4 rounded">
              Submit
            </button>
            <br />
            <Link to="/">
              <button className="btn btn-primary rounded">Home</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedGear: state.gearList.selectedGear,
    redirect: state.redirect.redirect,
  };
};

export default connect(mapStateToProps, { editGear, selectGear })(Form);

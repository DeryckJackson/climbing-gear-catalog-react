import React, { useState } from "react";
import { connect } from "react-redux";
import { addGear } from "../../actions/gear-list";
import { Gear } from './Types';
import { Link } from "react-router-dom";

type FormProps = {
  addGear: (gear: Gear) => void,
};

const Form = ({ addGear }: FormProps) => {
  const [gearState, setGearState] = useState({
    name: '',
    desc: '',
    brand: '',
    weight_grams: 0,
    length_mm: 0,
    width_mm: 0,
    depth_mm: 0,
    locking: "false",
  });

  const onChange = (e) => {
    setGearState({ 
      [e.target.name]: e.target.value,
      ...gearState
    });
  };

  const onSubmit = (e) => {
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
    } = gearState;
    const gear = {
      name,
      desc,
      brand,
      weight_grams,
      length_mm,
      width_mm,
      depth_mm,
      locking,
    };
    addGear(gear);
    setGearState({
      name: '',
      desc: '',
      brand: '',
      weight_grams: 0,
      length_mm: 0,
      width_mm: 0,
      depth_mm: 0,
      locking: "false",
    });
  };

  return (
    <div className="card card-body mt-2 mb-2 pb-1 shadow">
      <h2>Add Gear</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={onChange}
            value={gearState.name}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="desc"
            onChange={onChange}
            value={gearState.desc}
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input
            className="form-control"
            type="text"
            name="brand"
            onChange={onChange}
            value={gearState.brand}
          />
        </div>
        <div className="form-group">
          <label>Weight Grams</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="weight_grams"
            onChange={onChange}
            value={gearState.weight_grams}
          />
        </div>
        <div className="form-group">
          <label>Length MM</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="length_mm"
            onChange={onChange}
            value={gearState.length_mm}
          />
        </div>
        <div className="form-group">
          <label>Width MM</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="width_mm"
            onChange={onChange}
            value={gearState.width_mm}
          />
        </div>
        <div className="form-group">
          <label>Depth MM</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="depth_mm"
            onChange={onChange}
            value={gearState.depth_mm}
          />
        </div>
        <div className="form-group">
          <label>Locking</label>
          <select
            className="form-control"
            name="locking"
            onChange={onChange}
            value={gearState.locking}
          >
            <option value="false">
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
          <Link to="/" className="btn btn-primary rounded">
            Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { addGear })(Form);

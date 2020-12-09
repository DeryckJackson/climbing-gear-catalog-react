import React from "react";
import { connect } from "react-redux";
import { addGear } from "../../actions/gear-list";
import { Gear } from './types';
import { Link } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
// import { DomEvent } from '../../types';

type FormProps = {
  addGear: (gear) => void,
};

const Form = ({ addGear }: FormProps) => {
  const { value:name, bind:bindName, reset:resetName } = useInput('');
  const { value:desc, bind:bindDesc, reset:resetDesc } = useInput('');
  const { value:brand, bind:bindBrand, reset:resetBrand } = useInput('');
  const { value:weight_grams, bind:bindWeight, reset:resetWeight } = useInput(0);
  const { value:length_mm, bind:bindLength, reset:resetLength } = useInput(0);
  const { value:width_mm, bind:bindWidth, reset:resetWidth } = useInput(0);
  const { value:depth_mm, bind:bindDepth, reset:resetDepth } = useInput(0);
  const { value:locking, bind:bindLocking, reset:resetLocking } = useInput('false');

  const handleSubmit = (e) => {
    e.preventDefault();
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
    resetName();
    resetDesc();
    resetBrand();
    resetWeight();
    resetLength();
    resetWidth();
    resetDepth();
    resetLocking();
  };

  return (
    <div className="card card-body mt-2 mb-2 pb-1 shadow">
      <h2>Add Gear</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            {...bindName}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            {...bindDesc}
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <input
            className="form-control"
            type="text"
            {...bindBrand}
          />
        </div>
        <div className="form-group">
          <label>Weight Grams</label>
          <input
            className="form-control"
            type="number"
            step="1"
            {...bindWeight}
          />
        </div>
        <div className="form-group">
          <label>Length MM</label>
          <input
            className="form-control"
            type="number"
            step="1"
            {...bindLength}
          />
        </div>
        <div className="form-group">
          <label>Width MM</label>
          <input
            className="form-control"
            type="number"
            step="1"
            {...bindWidth}
          />
        </div>
        <div className="form-group">
          <label>Depth MM</label>
          <input
            className="form-control"
            type="number"
            step="1"
            {...bindDepth}
          />
        </div>
        <div className="form-group">
          <label>Locking</label>
          <select
            className="form-control"
            {...bindLocking}
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

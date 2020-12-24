import React, { useState } from "react";
import { connect } from "react-redux";
import { addGear } from "../../actions/gear-list";
import { Link } from "react-router-dom";
import Input from '../common/Input';
import { useInput } from '../../hooks/useInput';
import { RootReducerState } from "../../reducers/reducer.types";

type FormProps = {
  // TODO:#6 find correct gear type
  addGear: (gear, token: string) => void,
  token: string,
};

const Form = ({ addGear, token }: FormProps) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [brand, setBrand] = useState('');
  const [weight_grams, setWeight] = useState('0');
  const [length_mm, setLength] = useState('0');
  const [width_mm, setWidth] = useState('0');
  const [depth_mm, setDepth] = useState('0');
  const { value:locking, bind:bindLocking, reset:resetLocking } = 
  useInput('false');

  // TODO:#5 Find correct event type
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
    addGear(gear, token);
    setName('');
    setDesc('');
    setBrand('');
    setWeight('0');
    setLength('0');
    setWidth('0');
    setDepth('0');
    resetLocking();
  };

  return (
    <div className="card card-body mt-2 mb-2 pb-1 shadow">
      <h2>Add Gear</h2>
      <form onSubmit={handleSubmit}>
        <Input name={'Name'} type={'text'} val={name} setVal={setName} />
        <Input name={'Description'} type={'text'} val={desc} setVal={setDesc} />
        <Input name={'Brand'} type={'text'} val={brand} setVal={setBrand} />
        <Input
          name={'Weight in grams'}
          type={'number'}
          step={'1'}
          val={weight_grams}
          setVal={setWeight}
          />
        <Input
          name={'Length in MM'}
          type={'number'}
          step={'1'}
          val={length_mm}
          setVal={setLength}
          />
        <Input
          name={'Width in MM'}
          type={'number'}
          step={'1'}
          val={width_mm}
          setVal={setWidth}
          />
        <Input
          name={'Depth in MM'}
          type={'number'}
          step={'1'}
          val={depth_mm}
          setVal={setDepth}
          />
        <div className="form-group">
          <label>Locking</label>
          <select
            className="form-control"
            {...bindLocking}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success mb-3 rounded">
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

type MapStateToProps = {
  token: string | null,
};

export const mapStateToProps = (state: RootReducerState): MapStateToProps => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { addGear })(Form);

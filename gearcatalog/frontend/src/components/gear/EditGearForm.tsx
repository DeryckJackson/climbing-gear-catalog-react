import React, { EffectCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { editGear, selectGear } from '../../actions/gear-list';
import { Link, useHistory } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import Input from '../common/Input';
import { Gear } from './types';
import { RootReducerState } from '../../reducers/reducer.types';

type EditGearProps = {
  editGear: (gear: Gear, token: string) => void,
  selectGear: (id: number, token: string) => EffectCallback,
  selectedGear: Gear,
  token: string,
  match: {
    params: {
      id: number,
    },
  },
};

const EditGearForm = ({ editGear, selectGear, selectedGear, token,
match: { params } }: EditGearProps) => {
  const history = useHistory();
  const [gearUpdated, setGearUpdated] = useState(false);
  const [name, setName] = useState(selectedGear.name);
  const [desc, setDesc] = useState(selectedGear.desc);
  const [brand, setBrand] = useState(selectedGear.brand);
  const [weight_grams, setWeight] = useState(selectedGear.weight_grams);
  const [length_mm, setLength] = useState(selectedGear.length_mm);
  const [width_mm, setWidth] = useState(selectedGear.width_mm);
  const [depth_mm, setDepth] = useState(selectedGear.depth_mm);
  const { value:locking, bind:bindLocking, reset:resetLocking } = 
    useInput(selectedGear.locking);

  useEffect(() => {
    selectGear(params.id, token);
  }, [selectedGear.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const gear = {
      id: selectedGear.id,
      name,
      desc,
      brand,
      weight_grams,
      length_mm,
      width_mm,
      depth_mm,
      locking,
    };
    editGear(gear, token);
    setName('');
    setDesc('');
    setBrand('');
    setWeight(0);
    setLength(0);
    setWidth(0);
    setDepth(0);
    resetLocking();
    setGearUpdated(true);
  };

  if (gearUpdated) {
    history.push('/');
  }

  return (
    <div className="card card-body mt-2 mb-2 pb-1 shadow">
      <h2>Edit Gear</h2>
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
  selectedGear: Gear,
  token: string | null,
};

export const mapStateToProps = (state: RootReducerState): MapStateToProps => {
  return {
    selectedGear: state.gearList.selectedGear,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { editGear, selectGear })(EditGearForm);

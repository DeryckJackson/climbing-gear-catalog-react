import React from "react";

type InputProps = {
  name: string,
  val: string | number,
  type: string,
  setVal: (val: string) => void,
  step?: string,
};

const Input = (props: InputProps): JSX.Element => {
  const { name, val, type, setVal, step } = props;

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  if (step) {
    return (
      <div className="form-group">
      <label>{`${name}`}</label>
      <input
        className="form-control"
        value={`${val}`}
        type={`${type}`}
        step={`${step}`}
        onChange={handleChange}
      />
    </div>
    );
  } else {
    return (
      <div className="form-group">
        <label>{`${name}`}</label>
        <input
          className="form-control"
          value={`${val}`}
          type={`${type}`}
          onChange={handleChange}
        />
      </div>
    );
  }
};

export default Input;

import React from "react";

type InputProps<T> = {
  name: string,
  val: T,
  type: string,
  setVal: (val: T) => void,
  step?: string,
};

const Input = <T,>(props: InputProps<T>): JSX.Element => {
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
        id={`${name}`}
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
          id={`${name}`}
          value={`${val}`}
          type={`${type}`}
          onChange={handleChange}
        />
      </div>
    );
  }
};

export default Input;

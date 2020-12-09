import React from "react";
import { useInput } from "../../hooks/useInput";

const Input = (props) => {
  const {
    name,
    initialValue,
    type,
  } = props;
  const { value, bind, reset } = useInput(initialValue);

  return (
    <div className="form-group">
      <label>{`${name}`}</label>
      <input
        className="form-control"
        type={`${type}`}
        {...bind}
      />
    </div>
  );
};
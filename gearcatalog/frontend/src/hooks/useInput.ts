import { useState } from "react";

type UseInputReturn<T> = {
  value: T,
  setValue: (value: T) => void,
  reset: () => void,
  bind: {
    value: T,
    onChange: (event) => void
  }
};

export const useInput = <T,>(initialValue: T ):
  UseInputReturn<T> => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

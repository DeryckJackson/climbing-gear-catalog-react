import { useState } from "react";
import { DomEvent } from '../types';

type UseInputReturn = {
  value: string | number,
  setValue: (value: string | number) => void,
  reset: () => void,
  bind: {
    value: string | number,
    onChange: (event: DomEvent) => void
  }
};

export const useInput = (initialValue: string | number): UseInputReturn => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};
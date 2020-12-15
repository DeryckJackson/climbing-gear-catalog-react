import { useState } from "react";
import { DomEvent } from '../types';

type UseInputReturn = {
  value: string,
  setValue: (value: string) => void,
  reset: () => void,
  bind: {
    value: string,
    onChange: (event: DomEvent) => void
  }
};

export const useInput = (initialValue: string): UseInputReturn => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(`${initialValue}`),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

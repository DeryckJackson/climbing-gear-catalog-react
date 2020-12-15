import { useInput } from '../useInput';
import React from 'react';

describe('useInput', () => {
  const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useStateMock: any = (initState: any) => [initState, setState];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should call useInput and return correct values', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    const { value, setValue, reset, bind } = useInput('foobar');

    expect(value).toBe('foobar');
    setValue('notfoobar');
    expect(setState).toHaveBeenCalledTimes(1);
    expect(bind.value).toBe('foobar');
    bind.onChange({
      preventDefault: () => 1 + 1,
      target: {
        name: 'event',
        value: 'eventValue',
      },
    });
    expect(setState).toHaveBeenCalledTimes(2);
    reset();
    expect(setState).toHaveBeenCalledTimes(3);
  });
});

import { useInput } from '../useInput';
import React from 'react';

describe('useInput', () => {
  test('Should call useInput and return correct values', () => {
    const mock = jest.spyOn(React, 'useState')
    .mockImplementation(jest.fn());
    const { value, setValue, reset, bind } = useInput('foobar');

    expect(value).toBe('foobar');
    setValue('notFoobar');
    expect(value).toBe('notFoobar');
    expect(reset()).toBe('foobar');
    expect(bind.value).toBe('foobar');
    bind.onChange({
      preventDefault: () => 1 + 1,
      target: {
        name: 'event',
        value: 'eventValue',
      },
    });
  });
});
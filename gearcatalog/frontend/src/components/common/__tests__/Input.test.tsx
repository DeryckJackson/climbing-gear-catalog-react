import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Input', () => {
  test('Should render component and return div with text input', () => {
    const props = {
      name: 'foo',
      val: 'bar',
      type: 'text',
      setVal: jest.fn(),
    };

    const wrapper = shallow(<Input {...props}/>);

    expect(wrapper.contains(<label>foo</label>)).toBe(true);
    expect(wrapper.containsMatchingElement(<input type="text"></input>)).toBe(true);
  });

  test('Should render component and return div with number input', () => {
    const props = {
      name: 'foo',
      val: 'bar',
      type: 'number',
      step: '1',
      setVal: jest.fn(),
    };

    const wrapper = shallow(<Input {...props}/>);

    expect(wrapper.contains(<label>foo</label>)).toBe(true);
    expect(wrapper.containsMatchingElement(<input type="number" step="1"></input>)).toBe(true);
  });

  test('Should render component simulate onChange event', () => {
    const props = {
      name: 'foo',
      val: '',
      type: 'text',
      setVal: jest.fn(),
    };

    const changeEvent = {
      target: {
        name: 'foo',
        value: 'bar',
      },
    };

    const wrapper = shallow(<Input {...props}/>);

    expect(wrapper.find('input').at(0).prop('value')).toEqual('');
    wrapper.find('input').at(0).simulate('change', changeEvent);
    expect(props.setVal).toHaveBeenCalledWith('bar');
  });
});

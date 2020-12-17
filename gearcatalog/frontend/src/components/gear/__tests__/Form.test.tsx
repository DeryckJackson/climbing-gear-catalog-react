import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

beforeEach(() => {
  jest.clearAllMocks();
});

// jest.mock('../../common/Input');
jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

describe('Form', () => {
  const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const useStateMock: any = (initState: any) => [initState, setState];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render component', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.contains(<h2>Add Gear</h2>)).toBe(true);
  });

  test('Should render simulate form submit event', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    const props = {
      addGear: jest.fn()
    };

    const wrapper = shallow(<Form {...props}/>);

    const submitEvent = {
      preventDefault: jest.fn(),
    };

    expect(setState).toHaveBeenCalledTimes(0);
    expect(props.addGear).toHaveBeenCalledTimes(0);
    wrapper.find('form').simulate('submit', submitEvent);
    expect(setState).toHaveBeenCalledTimes(1);
    expect(props.addGear).toHaveBeenCalledTimes(1);
  });
});
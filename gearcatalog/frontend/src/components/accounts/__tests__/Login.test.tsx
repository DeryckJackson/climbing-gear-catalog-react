import React from 'react';
import { shallow } from 'enzyme';

import Login from '../Login';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Login', () => {
  test('Should render component', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.contains(
    <div className="form-group">
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div>
    )).toBe(true);
  });

  test('should simulate onChange events', () => {
    const wrapper = shallow(<Login />);
    const userEvent = {
      target: {
        name: 'username',
        value: 'testUser',
      },
    };
    const passwordEvent = {
      target: {
        name: 'password',
        value: 'foobar',
      },
    };

    expect(wrapper.find('input').at(0).prop('value')).toEqual('');
    expect(wrapper.find('input').at(1).prop('value')).toEqual('');
    wrapper.find('input').at(0).simulate('change', userEvent);
    wrapper.find('input').at(1).simulate('change', passwordEvent);
    expect(wrapper.find('input').at(0).prop('value')).toEqual('testUser');
    expect(wrapper.find('input').at(1).prop('value')).toEqual('foobar');
  });

  test('Should redirect to home', () => {
    const props = {
      isAuthenticated: true,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = shallow(<Login {...props}/>);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });

  test('Should call login prop', () => {
    const props = {
      login: jest.fn(),
    };
    const event = {
      preventDefault: jest.fn(),
    };
    const wrapper = shallow(<Login {...props}/>);

    expect(props.login).toHaveBeenCalledTimes(0);
    wrapper.find('form').simulate('submit', event);
    expect(props.login).toHaveBeenCalledTimes(1);
  });
});
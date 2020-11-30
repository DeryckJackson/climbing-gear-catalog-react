import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Login from '../Login';
import { Redirect } from 'react-router-dom';

describe('Login', () => {
  test('Should render component', () => {
    expect(shallow(<Login />).contains(
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
    const wrapper = shallow(<Login {...props}/>);

    expect(wrapper.contains(<Redirect to="/" />)).toBe(true);
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
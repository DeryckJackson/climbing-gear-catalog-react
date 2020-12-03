import React from 'react';
import { shallow } from 'enzyme';

import Register from '../Register';

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
    const wrapper = shallow(<Register />);

    expect(wrapper.contains(
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    )).toBe(true);
  });

  test('Should simulate onSubmit event and fail password logic check', () => {
    const props = {
      createMessage: jest.fn(),
      register: jest.fn(),
    };

    const passwordEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'foobar',
      }
    };

    const password2Event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password2',
        value: 'notfoobar',
      }
    };

    const submitEvent = {
      preventDefault: jest.fn(),
    };

    const wrapper = shallow(<Register {...props} />);

    expect(props.createMessage).toHaveBeenCalledTimes(0);
    expect(wrapper.find('input').at(2).prop('value')).toEqual('');
    expect(wrapper.find('input').at(3).prop('value')).toEqual('');
    wrapper.find('input').at(2).simulate('change', passwordEvent);
    wrapper.find('input').at(3).simulate('change', password2Event);
    wrapper.find('form').simulate('submit', submitEvent);
    expect(props.createMessage).toHaveBeenCalledTimes(1);
    expect(props.register).toHaveBeenCalledTimes(0);
  });

  test('Should simulate onSubmit event and pass password logic check', () => {
    const props = {
      createMessage: jest.fn(),
      register: jest.fn(),
    };

    const passwordEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'foobar',
      }
    };

    const password2Event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password2',
        value: 'foobar',
      }
    };

    const submitEvent = {
      preventDefault: jest.fn(),
    };

    const wrapper = shallow(<Register {...props} />);

    expect(props.register).toHaveBeenCalledTimes(0);
    expect(wrapper.find('input').at(2).prop('value')).toEqual('');
    expect(wrapper.find('input').at(3).prop('value')).toEqual('');
    wrapper.find('input').at(2).simulate('change', passwordEvent);
    wrapper.find('input').at(3).simulate('change', password2Event);
    wrapper.find('form').simulate('submit', submitEvent);
    expect(props.createMessage).toHaveBeenCalledTimes(0);
    expect(props.register).toHaveBeenCalledTimes(1);
  });

  test('Should simulate onSubmit event and pass password logic check', () => {
    const props = {
      createMessage: jest.fn(),
      register: jest.fn(),
    };

    const usernameEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'username',
        value: 'testuser',
      }
    };

    const emailEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'email',
        value: 'user@test.com',
      }
    };

    const passwordEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'foobar',
      }
    };

    const password2Event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password2',
        value: 'notfoobar',
      }
    };

    const wrapper = shallow(<Register {...props} />);

    expect(wrapper.find('input').at(0).prop('value')).toEqual('');
    expect(wrapper.find('input').at(1).prop('value')).toEqual('');
    expect(wrapper.find('input').at(2).prop('value')).toEqual('');
    expect(wrapper.find('input').at(3).prop('value')).toEqual('');
    wrapper.find('input').at(0).simulate('change', usernameEvent);
    wrapper.find('input').at(1).simulate('change', emailEvent);
    wrapper.find('input').at(2).simulate('change', passwordEvent);
    wrapper.find('input').at(3).simulate('change', password2Event);
    expect(wrapper.find('input').at(0).prop('value')).toEqual('testuser');
    expect(wrapper.find('input').at(1).prop('value')).toEqual('user@test.com');
    expect(wrapper.find('input').at(2).prop('value')).toEqual('foobar');
    expect(wrapper.find('input').at(3).prop('value')).toEqual('notfoobar');
  });

  test('Should redirect to home', () => {
    const props = {
      isAuthenticated: true,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const wrapper = shallow(<Register {...props}/>);

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
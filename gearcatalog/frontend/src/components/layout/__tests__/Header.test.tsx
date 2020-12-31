import React from 'react';
import { shallow } from 'enzyme';
import Header, { mapStateToProps } from '../Header';
import { Link } from 'react-router-dom';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  Link: 'div',
}));
jest.mock('../../layout/LinkButton');

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render component and show guestLinks', () => {
    const props = {
      logout: jest.fn(),
      isAuthenticated: false,
      token: null,
      user: null,
    };

    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.contains(
      <Link to="/login" className="nav-link">
        Login
      </Link>)).toBe(true);
  });

  test('Should render component and show authLinks', () => {
    const props = {
      logout: jest.fn(),
      isAuthenticated: true,
      token: '42',
      user: {
        username:'woof'
      },
    };

    const wrapper = shallow(<Header {...props} />);

    expect(wrapper.contains(<strong>Welcome Woof</strong>)).toBe(true);
  });

  test('Should simulate click event on logout button', () => {
    const props = {
      logout: jest.fn(),
      isAuthenticated: true,
      token: '42',
      user: {
        username:'woof'
      },
    };

    const wrapper = shallow(<Header {...props} />);

    const onClickEvent = {
      preventDefault: jest.fn(),
    };

    wrapper.find('button').at(1).simulate('click', onClickEvent);
    expect(props.logout).toHaveBeenCalledTimes(1);
  });
});

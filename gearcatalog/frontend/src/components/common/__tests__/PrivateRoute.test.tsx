import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('PrivateRoute', () => {
  test('Should render component and return loading h2 tag', () => {
    const props = {
      auth: {
      token: 'foo',
      isAuthenticated: false,
      isLoading: true,
      user: null,
    }
  };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} >
        <PrivateRoute path='/' component={'div'} {...props} />
      </MemoryRouter>
    );

    expect(wrapper.contains(<h2>Loading...</h2>)).toBe(true);
    wrapper.unmount();
  });

  test('Should render component and return authorized route component', () => {
    const props = {
      auth: {
        token: 'foo',
        isAuthenticated: true,
        isLoading: false,
        user: null,
      },
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} >
        <PrivateRoute path='/' component={() => <div/>} {...props} />
      </MemoryRouter>
    );

    expect(wrapper.contains(<div/>)).toBe(true);
    wrapper.unmount();
  });

  test('Should return redirect to login component', () => {
    const props = {
      auth: {
        token: 'foo',
        isAuthenticated: false,
        isLoading: false,
        user: null,
      },
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} >
        <PrivateRoute path='/' component={() => <div/>} {...props} />
      </MemoryRouter>
    );

    expect(wrapper.contains(<Redirect to="/login" />)).toBe(true);
    wrapper.unmount();
  });
});

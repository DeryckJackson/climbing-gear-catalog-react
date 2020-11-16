import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Switch } from 'react-router-dom';
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
  }

    const { root } = renderer.create(
      <Switch>
        <PrivateRoute
        path='/'
        component={'div'} 
        {...props} />
      </Switch>
    );

    expect(root.findByType(PrivateRoute)).toBeDefined();
    expect(root.findByType('h2')).toBeDefined();
  });

  test('Should render component and return authorized route component', () => {
    const props = {
      auth: {
        token: 'foo',
        isAuthenticated: true,
        isLoading: false,
        user: null,
      },
    }

    const { root } = renderer.create(
      <Switch>
        <PrivateRoute
        path='/'
        component={'div'} 
        {...props} />
      </Switch>
    );

    expect(root.findByType(PrivateRoute)).toBeDefined();
    expect(root.findByType('div')).toBeDefined();
  });

  /* TODO: Redo this after Login component is converted to a functional component
  test('Should render Login Component', () => {
    const authMock = {
      token: 'foo',
      isAuthenticated: false,
      isLoading: false,
      user: null,
    }

    const { root } = renderer.create(
      <Switch>
        <PrivateRoute
          exact
          auth={authMock}
          path='/'
          component={<div />} />
      </Switch>
    );

    console.log(root.find(Login))
    expect(root.find((x) => x == Login )).toEqual(true);
  }) */
})

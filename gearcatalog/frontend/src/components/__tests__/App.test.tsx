import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import Header from '../layout/Header';

jest.mock('../layout/Header');
jest.mock('react-redux', () => {
  return {
    // eslint-disable-next-line react/display-name
    Provider: () => {
      return <div></div>;
    },
    connect: () => {
      return (component) => {
        return component;
      };
    },
  };
});

describe('Dashboard', () => {
  test('Should render component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />)).toBe(true);
  });
});

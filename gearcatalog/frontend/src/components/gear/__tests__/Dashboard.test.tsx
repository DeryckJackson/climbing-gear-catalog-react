import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../Dashboard';
import GearList from '../GearList';

jest.mock('../GearList');

describe('Dashboard', () => {
  test('Should render component', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.contains(<GearList />)).toBe(true);
  });
});
import React from 'react';
import { mount } from 'enzyme';
import GearList, { mapStateToProps } from '../GearList';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
  Link: 'div',
}));
jest.mock('../../layout/LinkButton');

describe('GearList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render component, call getGear and show correct gear',
  () => {
    const props = {
      gearList: [{
        id: 42,
        name: 'foo',
        desc: 'baz',
        brand: 'bar',
        weight_grams: '1',
        length_mm: '2',
        width_mm: '3',
        depth_mm: '4',
        locking: 'false',
      }],
      getGear: jest.fn(),
    };

    const wrapper = mount(<GearList {...props} />);

    expect(wrapper.contains(<h2 className="mt-1">Gear List</h2>))
      .toBe(true);
    expect(wrapper.contains(<strong>foo</strong>))
      .toBe(true);
    expect(props.getGear).toHaveBeenCalledTimes(1);
  });

  test('Should render component, call getGear and show no gear', () => {
    const props = {
      gearList: [],
      getGear: jest.fn(),
    };

    const wrapper = mount(<GearList {...props} />);

    expect(wrapper.contains(<h2 className="mt-1">Gear List</h2>))
      .toBe(true);
    expect(wrapper.contains(<p>No gear yet.</p>))
      .toBe(true);
    expect(props.getGear).toHaveBeenCalledTimes(1);
  });

  test('Should render component and simulate click event',
  () => {
    const props = {
      gearList: [{
        id: 42,
        name: 'foo',
        desc: 'baz',
        brand: 'bar',
        weight_grams: '1',
        length_mm: '2',
        width_mm: '3',
        depth_mm: '4',
        locking: 'false',
      }],
      getGear: jest.fn(),
      deleteGear: jest.fn(),
    };

    const onClickEvent = {
      preventDefault: jest.fn(),
    };

    const wrapper = mount(<GearList {...props} />);

    wrapper.find('button').at(0).simulate('click', onClickEvent);
    expect(props.deleteGear).toHaveBeenCalledTimes(1);
  });
});

describe('mapStateToProps', () => {
  test('Should return state object', () => {
    const state = {
      gearList: {
        gearList: [{
          id: 42,
          name: 'foo',
          desc: 'baz',
          brand: 'bar',
          weight_grams: '1',
          length_mm: '2',
          width_mm: '3',
          depth_mm: '4',
          locking: false,
          },
        ],
      },
      auth: {
        token: 'foo',
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(mapStateToProps(state as any).token).toBe(state.auth.token);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(mapStateToProps(state as any).gearList)
      .toBe(state.gearList.gearList);
  });
});
